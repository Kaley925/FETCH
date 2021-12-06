import { Router } from 'express';
import ApiRouter from './api'
import AuthRouter from './auth';

const router = Router();

router.use('/api', ApiRouter);
router.use('/auth', AuthRouter);

export default router;