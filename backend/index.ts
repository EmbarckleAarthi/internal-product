import cors from "cors";
import express from "express";
import mysql from "mysql";

import { router } from "./src/Routes/User";

const app = express();
app.use(express.json());
app.use(cors());

export const db = mysql.createConnection({
  host: "192.168.1.5",
  port: 3307,
  user: "keerthana",
  password: "Embarckle@2020",
  database: "Onboarding",
});

app.use("/user", router);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("app listening in port 3001");
});
