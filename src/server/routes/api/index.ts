import { Router } from "express";
import CatsRouter from "./cats";
import DogsRouter from "./dogs";

const router = Router();

router.use("/cats", CatsRouter);
router.use("/dogs", DogsRouter);

export default router;

// "Dog",
//     "Cat",
//     "Rabbit",
//     "Small & Furry",
//     "Horse",
//     "Bird",
//     "Scales, Fins & Other",
//     "Barnyard"
