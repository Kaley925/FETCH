import { Router } from 'express';
import CatsRouter from './cats';
import DogsRouter from './dogs';
import UsersRouter from './users';

const router = Router();

router.use('/cats', CatsRouter);
router.use('/dogs', DogsRouter);
router.use('/users', UsersRouter);

export default router;
