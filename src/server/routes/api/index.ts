import { Router } from 'express';
import CatsRouter from './cats';
import DogsRouter from './dogs';

const router = Router();

router.use('/cats', CatsRouter);
router.use('/dogs', DogsRouter);

export default router;