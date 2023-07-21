import cors from "cors";
import express from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "192.168.1.5",
  port: 3307,
  user: "keerthana",
  password: "Embarckle@2020",
  database: "Onboarding",
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  db.query(
    "INSERT INTO USERS VALUES(?,?,?)",
    [username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("data added");
      }
    }
  );
});

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("app listening in port 3001");
});
