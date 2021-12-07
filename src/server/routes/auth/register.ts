import * as jwt from "jsonwebtoken";
import config from "../../config";
import db from "../../db";
import { Router } from "express";
import { generateHash } from "../../utilities/passwords";

const router = Router();

router.post("/", async (req, res) => {
  const newUser = req.body;
  try {
    newUser.password = generateHash(newUser.password);
    const result: { insertId: number } = await db.Users.insert(newUser);
    const token = jwt.sign(
      { userid: result.insertId, email: newUser.email, role: 1 },
      config.jwt.secret,
      { expiresIn: "15d" }
    );
    res.json(token);
    console.log(token);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Something went wrong" });
  }
});

export default router;
