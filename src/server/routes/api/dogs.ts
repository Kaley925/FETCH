import { Router } from 'express';
import * as passport from 'passport';
import fetch from 'node-fetch'
import { ReqUser } from '../../types';
// import { makeCall, getOAuth } from '../../utilities/petfinder';

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6ImRiMWViMWMzMjdjNGRkOTA3YzIzZjA0OTU2YWU2OWQ3YmFjNGRiNGRkYjc0ZDA4ZjRlMDI2NDk5ZjUyNDM2NmE3YjNhM2MxOGQ3M2U0Njk2IiwiaWF0IjoxNjM4NDgwMDk0LCJuYmYiOjE2Mzg0ODAwOTQsImV4cCI6MTYzODQ4MzY5NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.lGrjtopngvThZ-TAok52uqiN8D9B_u9N_wyxjk4t6I9VLhQyT3jBxqkL3gyfM2GBLbwGJcbUh5ab8-zhWVol70yejzIjOVyRRsdno6PreKYaWaRQVMbzz6J45mtT-eyQPysq-8PYUkYcWXx118WXyIsvmAU--dv9Ra8FJFIfI1FmI6IE4Av8xD5AfMlgRgcwUEsgLaGQC9rKCECzwlwChZYm4x9T_qbO3b0gLNy3Zyj3eiHrPWdttZqZ6cnreSVcPm7oAkKZouf3PpexsQdMcQkLsM2HHf1MDEJtMVUE5mX9BmY63QRY9UzrR_VaRJ6vcRsJLUjmD14aTP--pk_Gcg";
        const resp = await fetch(`https://api.petfinder.com/v2/animals/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
        })
        const body = await resp.json()

        const allDogs = body.animals.map((animals: { id: number; name: string; type: string; description: any; age: string; url: string; distance: any, photos: string; videos: string; _links: string; contact: string }) => {
            if (animals.type === 'Dog') {
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

        res.json(allDogs.filter((animal: any) => animal));

    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

export default router;