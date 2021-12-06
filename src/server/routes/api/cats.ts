import { Router } from 'express';
import * as passport from 'passport';
import fetch from 'node-fetch';
import { ReqUser } from '../../types';

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjE1MjU0ZTRiMGU3ZGFiN2UyNjgxNWU1MDA0ZjNmZDM3OTQzZTNkMTE5OGEwNjA5YWVlZjk2M2E0YWQ2NmE1NmViYTU0YTkyYTlhZTUxNjdhIiwiaWF0IjoxNjM4ODExNzMyLCJuYmYiOjE2Mzg4MTE3MzIsImV4cCI6MTYzODgxNTMzMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.a9u9orZlYp6yCo64wVjBf3MBCoLL0QN0NdpeDa2vkazIXrmomfd5u-dN32QmY0o6vqdMtk1YN_MXT_NfCKz2vZmshNlP39YedmI-Oo3-PDJlDt7s_fP1_JzuX2s4Ob-yjWuw3cue3d5GwzblogSqQ0HpvRhv-CPtRIYlscYjDeM9-ev_FlQ-OQmSXDYBqDQVueaRNYz085Odm408MbQHPNj23L9o8CT0ERtwb6mKsrvNuqMZ_TC4ePHB10nyMmwYdM2BvV7_CO2te85IM1vgXcs_BNWePOLAZf4R5Kn4dPr9RWnAzW_ytLzJ8lSg8St3evq4JbFH02YKfbKuhzl0JQ";
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