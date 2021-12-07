import { Router } from 'express';
import * as passport from 'passport';
import fetch from 'node-fetch';
import { ReqUser } from '../../types';

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6ImNkYTZkZTI1YTU5MWFkMmJmNmI1ODgxNjBkZDIxYzE0NzBkODRkMzZkODUyMWExNzQ0NjE1NTdhZjQ1Mjg3NjE4ZjMyZWM1MDk2N2RjOTBkIiwiaWF0IjoxNjM4ODIzMzQ2LCJuYmYiOjE2Mzg4MjMzNDYsImV4cCI6MTYzODgyNjk0Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.wQeLvicu2sMyHpU2PJtpbAIL7reiHmajNG_Ricjmccqt-YG4xfZUEio46KVG4gO6ZHbE-9PtPPdBWuvyvBLveY61PDb_ThkvmD-hIP-ruRnYESRm2PZ9A33I13FSAvrNq9Qs11sjHZQWZosRpM7ZTHXpPu_0dlraxtxRtBFuG81H3RVCGzk67EitXbrfXr6VUI-XWmgGH2m58EINoJBFVlnPTa0jsvY65zIzMqS-Ps86Am5SDx0nOXeRWGgZx25viUSKRr1eutkZk7tMXSD9C4vhGj3inEDx-lyNvo376YNuatUXPTcj5RPsGi9-ETNwqEs3ANIk3cXAsh-KfSyN1A";
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