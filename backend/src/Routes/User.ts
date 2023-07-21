import express from "express";

import { finduser, userlogin } from "../controllers/AuthController";

export const router = express.Router();

router.get("/", (req, res) => {
  res.send(userlogin());
});

router.get("/finduser", async (req, res) => {
  const user = await finduser(req.body);
  res.send(user);
});

router.post("/signup", async (req, res) => {
  const user = await 
});
