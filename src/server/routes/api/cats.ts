
import { Router } from "express";
import db from "../../db";
import * as passport from "passport";

// import fetch from 'node-fetch';
// import { ReqUser } from '../../types';
// import { makeCall, getOAuth } from '../../utilities/petfinder';

const router = Router();

router.get('/:id?', passport.authenticate('jwt'), async (req, res, next) => {

    const catid = Number(req.params.id);

    if (catid) {
        try {
            const cat = await db.Cats.one(catid);
            res.json(cat);
        } catch (err) {
            console.error(err);
            res.json(err)
        }
    }
    else {
        try {
            const cats = await db.Cats.all();
            res.json(cats);
        } catch (err) {
            console.error(err);
            res.json(err)
        }
    }
})

export default router;






// export default router;
