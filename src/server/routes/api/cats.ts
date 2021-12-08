import { Router } from 'express';
import db from '../../db';
import * as passport from 'passport';
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

// router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
//     try {
//         const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6ImVmNWYzMmZmYTA3ODVjY2FkMWM2OTI3Yjk3MjdiYWVjODM0MWNmNTJjODRiZTM2YTA2MTBjMDg4NzczZjRkNTQzMjY2ZmE5NzRlZTg2ZTMyIiwiaWF0IjoxNjM4ODkxODAyLCJuYmYiOjE2Mzg4OTE4MDIsImV4cCI6MTYzODg5NTQwMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.XQZY3qu_zD1z1WN723aJOW3NCcUwyFz01M0b8YCPkRUcOFx0tgf-a3rCB_xo-CZjjDzMeWcwDjc6CscuHpXDHtOCJNwsXwpMIDTDWh7CWbHWAynPTNcInVVSTquQDsKLI-FIJ3HLoqGsredyq6rugTqvjpp1j05ho0Jo_R73EPRIW6oRGtCUkUbIsYcFbY5Y2cmtBM_U-yh-gjR0FMP9Vnr-u930lx6CGyK7sX4Kg6-Ae3dyUqtf_hptdDEfLM-blsHUSaOT_j6uIcN1_AadEr9w_gbPfCDnapzxTWjKQhFZ_F7v4Oa9ttycAa-U3apOzc6Mw6eN-_NuL3nnZOZx7g";
//         const resp = await fetch(`https://api.petfinder.com/v2/animals`, {
//             headers: {
//                 'Authorization': `Bearer ${apiKey}`
//             },
//         })
//         const body = await resp.json()

//         const allCats = body.animals.map((animals: { id: number; name: string; type: string; description: any; age: string; url: string; distance: any, photos: string; videos: string; _links: string; contact: string}) => {
//             if (animals.type === 'Cat') {
//                 return {
//                     id: animals.id,
//                     name: animals.name,
//                     type: animals.type,
//                     description: animals.description,
//                     age: animals.age,
//                     url: animals.url,
//                     distance: animals.distance,
//                     photos: animals.photos,
//                     videos: animals.videos,
//                     _links: animals._links,
//                     contact: animals.contact
//                 }
//             } 
//         });

//         res.json(allCats.filter((animal: any) => animal));

//     } catch (error) {
//         res.status(500).json({ error: 'Something went wrong!' });
//     }
// });

// export default router;
