import express from "express";

import {
  finduser,
  loginUser,
  registerUser,
} from "../controllers/AuthController";

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
  const user: any = await finduser(req.body);
  if (user) {
    await loginUser(req.body, user)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  }
});
