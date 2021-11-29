import { Router } from 'express';
import ApiRouter from './api'
import AuthRouter from './auth';

const router = Router();

router.use('/api', ApiRouter);
router.use('/auth', AuthRouter);

export default router;

// import { Router } from 'express';
// import db from '../db';
// import fetch from "node-fetch";

// const router = Router();

// router.get('/api/cats', async (req, res, next) => {
//     const resp = fetch(`https://api.petfinder.com/v2/animals/`); // fetch from cat api
//     res.send(resp);
// });

// export default router;