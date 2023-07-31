import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { INewUser } from '@common/interface';

import { AuthService, MailService } from '../services';
import { verifyJwt } from '../utils';

export class AuthController {
    private authService: AuthService = new AuthService();
    private mailService: MailService = new MailService();

    public signup = async (req: Request, res: Response) => {
        try {
            const user = await this.authService.finduser(req.body.email);

            if (user) {
                res.send('user exists');
            } else {
                const response = await this.authService.registerUser(req.body);
                res.send(response);
            }
        } catch (err) {
            res.status(500).send({ message: `Error:${err.message}` });
        }
    };

    public async login(req: Request, res: Response) {
        const user: INewUser = await this.authService.finduser(req.body);
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (user) {
            if (isValid) {
                res.send('Login successful');
            } else {
                res.send('Invalid credentials');
            }
        } else {
            res.send('User not exist');
        }
    }

    public async forgotPassword(req: Request, res: Response) {
        const user: INewUser = await this.authService.finduser(req.body.email);

        if (user) {
            const jwtSecretKey = 'secret';
            const data = {
                time: Date(),
                email: user.email,
            };
            const token = jwt.sign(data, jwtSecretKey);
            if (!user) {
                res.send('Email address not found');
            }
            const resetUrl = `http://localhost:1234/resetpassword/`;
            const mailOptions = {
                from: 'vigilaakennedy@gmail.com',
                to: data.email,
                subject: 'Password Reset Instructions',
                text: `Please click on the following link to reset your password: ${resetUrl}?token=${token}`,
            };

            const isMailSent = this.mailService.sendMail(mailOptions);

            if (isMailSent) {
                res.send('Failed to send password reset instructions');
            } else {
                res.send('Password reset instructions sent to your email');
            }
        } else {
            res.send('User not found');
        }
    }

    public async resetPassword(req: Request, res: Response) {
        const token = req.params.token;
        const jwtSecretKey = 'secret';

        try {
            const decodedData: INewUser = (await verifyJwt(token, jwtSecretKey)) as INewUser;
            const newPassword = req.body.password;
            const isUpdated = await this.authService.updateUserPassword(decodedData.email, newPassword);

            if (isUpdated) res.send('Successfully reset password');
            else res.send('Failed to reset password');
            res.send('Password reset successful');
        } catch (err) {
            res.status(401).send('Invalid or expired token');
        }
    }
}
