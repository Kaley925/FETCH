import * as express from 'express';
import fetch from "node-fetch";

const router = express.Router();

router.get('/api/cats', async (req, res, next) => {
    const resp = fetch(""); // fetch from cat api
    res.send(resp);
});

export default router;