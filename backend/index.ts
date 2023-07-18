import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("app listening in port 3001");
});
