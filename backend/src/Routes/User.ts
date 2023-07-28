import express from "express";

import {
  finduser,
  loginUser,
  registerUser,
  updateUserPassword
} from "../controllers/AuthController";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const router = express.Router();

router.post("/signup", async (req, res) => {
  const user = await finduser(req.body);
  if (user) {
    res.send("user exists");
  } else {
    const response = await registerUser(req.body);
    res.send(response);
  }
});
router.post("/login", async (req, res) => {
  const user: any = await finduser(req.body.email);
  if (user) {
    await loginUser(req.body, user)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  }
});
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vigilaakennedy@gmail.com',  //TODO 
    pass: 'gmhekehkmchvybtw'
  }
});
router.post("/forgotpassword", async (req, res) => {
  const user: any = await finduser(req.body.email)
  console.log("forgot password", user)
  if (user) {
    let jwtSecretKey = 'secret'
    let data = {
      time: Date(),
      email: user.email,
    }
    const token = jwt.sign(data, jwtSecretKey);
    if (!user) {
      return res.send('Email address not found');
    }
    const resetUrl = `http://localhost:1234/resetpassword/`;   //TODO
    const mailOptions = {
      from: 'vigilaakennedy@gmail.com',
      to: data.email,
      subject: 'Password Reset Instructions',
      text: `Please click on the following link to reset your password: ${resetUrl}?token=${token}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send('Failed to send password reset instructions');
      }
      res.send('Password reset instructions sent to your email');
    });
  }
});
const verifyJwt = (token: string, secretKey: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err: any, decoded: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
router.post('/resetpassword/:token', async (req, res) => {
  const token = req.params.token;
  const jwtSecretKey = 'secret';
  try {
    const decodedData: any = await verifyJwt(token, jwtSecretKey);
    const newPassword = req.body.password;
    await updateUserPassword(decodedData.email, newPassword);
    res.send('Password reset successful');
  } catch (err) {
    console.error(err);
    res.status(401).send('Invalid or expired token');
  }
});