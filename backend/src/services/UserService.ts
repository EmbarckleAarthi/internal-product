import db from "../../../backend/index";

export class UserService {
  public async findByMail(email: string): Promise {
    db.query(
      "SELECT email FROM users WHERE email(?)",
      [email],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          return result;
        }
      }
    );
  }

  public async createUser(data):Promise{
    db.query(
      "INSERT INTO USERS VALUES(?,?,?)",
      [data.username, data.email, data.password],
      (err, result) => {
        if(err){
          console.log(err);
        } else {
          return result;
        }
    }
)
  }
}
