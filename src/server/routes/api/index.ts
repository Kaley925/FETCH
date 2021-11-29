import { Router } from 'express';
import PizzaRouter from './pizza';

const router = Router();

router.use('/pizza', PizzaRouter);

export default router;