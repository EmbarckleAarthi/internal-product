import { db } from "../../index";

export const userlogin = () => {
  return "user route created successfully";
};

export const finduser = async (data: any) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users where email="${data.email}"`,
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
