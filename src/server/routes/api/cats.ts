import { Router } from 'express';
import * as passport from 'passport';
import fetch from 'node-fetch';
import { ReqUser } from '../../types';
// import { makeCall, getOAuth } from '../../utilities/petfinder';

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjRmZGFjMDkzMTkyZDM4ZjFiNzE0MzlhYmFiNzJkZjNkODA5YmY2YjQ3NDU1Y2U1NTgyMmMxMzMyZGE1MDA4YzkwMjJmN2M1ZDNiYjVkYzk4IiwiaWF0IjoxNjM4ODk0OTEyLCJuYmYiOjE2Mzg4OTQ5MTIsImV4cCI6MTYzODg5ODUxMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.LrTk8mvdEsy-Gb9NrsdjiIH98etc2WvQ_fB39h6FNxW7hLVfDckFyGwIQgBZd6BPP7vduqEbnErzZ5TqN1OEI9FUeudpo63UMzE1KtNurIA_zMknKp_4V9HgTC7YfHdXz4gsuhjt-0JTDyVlmldTcvgEoJhL6t90gxpjwX1rnlm0bl8cnlhPxzgt_9YlYPWKIZ0AZwIjINTHp157p8pGpRtEVbWPKm0URIQPSiMu68vsna9VbyMeoHQUYU0bYRvhnSaIlcWc8Ud6wh7MqVSsGVtweuFDJY5-T67mMc1IwC0Ct-aLy25x0dtMHqpQxMlMueIimCgTJw7YhYBeCpAP3w";
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

        res.json(allCats.filter((animal: any) => animal));

    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

export default router;