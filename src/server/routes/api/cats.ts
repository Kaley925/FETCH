import { Router } from 'express';
import * as passport from 'passport';
import fetch from 'node-fetch';
import { ReqUser } from '../../types';

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6ImVmZWExNzNkNWZhMDgwNzk2YmU1OGY1NGIzMWQ4ZGY5OTkzNGUwNzljNzBiYzIzZjgwZWIxZmE3YzQ1NzNiYWZjZjI2ODkwYWJkNzMzZTQxIiwiaWF0IjoxNjM4MjIwMzE1LCJuYmYiOjE2MzgyMjAzMTUsImV4cCI6MTYzODIyMzkxNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.mkGQcVb_QGIfFzqH2FSVsF2zuXHn_5kjlG1ikTjJkLO-34iTkxMhbIZPAU88L7j6Y883ie5jfFcCHBwCJmAdmNEtcwBwuZj0SurVkMLfk3-_lwhYglzJkbTcXsOJ3FOxYcSlfDPwrQqrQmZahGsWTrrfNqrRfu94fT0xOaeZfJIK3jnUgaCsPVQvYnfX8OmUHD9NyVsjBt5xsdPDY1q6LtID3WoMbQN0et9HlzdqPlWP1kq7p_WEuFnQHUvm3J9AtdToxszR1m1ChhVoa-wbBFPcZHWI7argfloISzmO43UKPK9nD0aWiFyjEj9qked4sPLUIPs33Bxou86v1eardQ';
        const resp = await fetch(`https://api.petfinder.com/v2/animals`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
        })
        const body = await resp.json()

        const allCats = body.animals.map((animals: { id: number; name: string; type: string; description: any; age: string; }) => {
            if (animals.type === 'Cat') {
                return {
                    id: animals.id,
                    name: animals.name,
                    type: animals.type,
                    description: animals.description,
                    age: animals.age
                }
            } 
        });

        res.json(allCats.filter(animal => animal));

    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

export default router;