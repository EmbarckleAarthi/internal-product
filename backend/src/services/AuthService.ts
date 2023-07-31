import bcrypt from 'bcryptjs';

import { INewUser } from '@common/interface';

import { database } from '../database';

export class AuthService {
    public async finduser(email): Promise<INewUser> {
        if (!email) throw new Error('User email is missing!');

        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM users where email="${email}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result[0]);
                }
            });
        });
    }

    public async registerUser({ email, password, username }: INewUser) {
        const salt = await bcrypt.genSalt(10);
        const hashed_Password = await bcrypt.hash(password, salt);

        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO users values(?,?,?)`, [username, email, hashed_Password], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('User Added!');
                }
            });
        });
    }

    public async updateUserPassword(email: string, newPassword: string): Promise<boolean> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        return new Promise((resolve, reject) => {
            database.query(`UPDATE users SET password=? WHERE email=?`, [hashedPassword, email], (err, _result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });
    }
}
