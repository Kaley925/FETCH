import { Router } from 'express';
import * as passport from 'passport';
import fetch from 'node-fetch';
import { ReqUser } from '../../types';

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjA3NmYwODRmZDQ5NThiNDRlOTgwMGU5ZTk2YTg0ZjNjZmYyZTE2YjliZjZhYTY1ZjBiNTljNTJjMjI4MjA3ZWJhZjA3MDZjY2YwZjUyYjY2IiwiaWF0IjoxNjM4MzA1ODkxLCJuYmYiOjE2MzgzMDU4OTEsImV4cCI6MTYzODMwOTQ5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.sgA4gIG3OL2rllfDBzy65BlGvnFuSgELUC3wTdbznDn5TSNVHRLlDP5kB52kfeWaTIr7xPiwu1PuJUbxMwVQd3nQddDjveZ3FE4wjf_qbxtaO0r2pMb6RUBuIWKgL3CHSvJLNyJVEdujKQABs-5uBvbytAeJpk0U-axNWl6qrE84ZvDC0nUM5KV0s_ubyY-MP_aV1GfH5sf4ueDyYFnoEidnStYki3JZt1vNwU6zdn2O1W91x0bjdyq-6NFU5R5wZ7_ofgGmC9oM2kjWGBVUrYH8SG6Rgdt4DyyDpdKrZbj6eaWHn4vHxOwBUE1MdsIDuhlltkkR8AdyFTpnrmbN2Q';
        const resp = await fetch(`https://api.petfinder.com/v2/animals`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
        })
        const body = await resp.json()

        const allCats = body.animals.map((animals: { id: number; name: string; type: string; description: any; age: string; url: string; distance: any, photos: string; videos: string; _links: string; contact: string}) => {
            if (animals.type === 'Cat') {
                return {
                    id: animals.id,
                    name: animals.name,
                    type: animals.type,
                    description: animals.description,
                    age: animals.age,
                    url: animals.url,
                    distance: animals.distance,
                    photos: animals.photos,
                    videos: animals.videos,
                    _links: animals._links,
                    contact: animals.contact
                }
            } 
        });

        res.json(allCats.filter(animal => animal));

    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

export default router;