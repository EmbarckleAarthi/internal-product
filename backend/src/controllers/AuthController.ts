import bcrypt from "bcryptjs";
import { INewUser } from "../../../common/interface/INewUser";
import { db } from "../../index";

export const finduser = async (data: any) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users where email="${data}"`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0]);
        }
      }
    );
  });
};

export const registerUser = async (data: INewUser) => {
  const { username, email, password } = data;
  const salt = await bcrypt.genSalt(10);
  const hashed_Password = await bcrypt.hash(password, salt);
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO users values(?,?,?)`,
      [username, email, hashed_Password],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve("user added");
        }
      }
    );
  });
};

export const loginUser = async (user: any, data: INewUser) => {
  const isValid = await bcrypt.compare(user.password, data.password);
  return new Promise((resolve, reject) => {
    if (isValid) {
      resolve("login successful");
    } else {
      reject("invalid credentials");
    }
  });
};

export const updateUserPassword = async (email: string, newPassword: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  return new Promise<void>((resolve, reject) => {
    db.query(
      `UPDATE users SET password=? WHERE email=?`,
      [hashedPassword, email],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

