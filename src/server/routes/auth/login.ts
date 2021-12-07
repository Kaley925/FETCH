import * as jwt from "jsonwebtoken";
import config from "../../config";
import * as passport from "passport";
import { Router } from "express";
import { ReqUser } from "../../types";

const router = Router();

router.post("/", passport.authenticate("local"), async (req: ReqUser, res) => {
  try {
    const token = jwt.sign(
      {
        userid: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: 1,
      },
      config.jwt.secret,
      { expiresIn: "15d" }
    );
    res.json(token);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Something went wrong" });
  }
});

export default router;
