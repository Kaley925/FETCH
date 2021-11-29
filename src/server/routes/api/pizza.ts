import { Router } from 'express';
import * as passport from 'passport';
import { ReqUser } from '../../types';

const router = Router();

router.get('/', passport.authenticate('jwt'), (req: ReqUser, res) => {

    try {
        res.json({ message: `Enjoy your pizza ${req.user.name}!` });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }

})

export default router;