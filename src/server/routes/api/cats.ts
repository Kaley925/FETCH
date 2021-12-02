import { Router } from 'express';
import * as passport from 'passport';
import fetch from 'node-fetch'
import { ReqUser } from '../../types';

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6ImQ3MGNhMWFhMzY4ZTUxNWQwZTFjMGMxYWY4YmQzNzVhOWZlZjc2YzMwNWU5YTRkNDIwNjliMjI5NTA4Yzc0MmY3MzU1NDljZWIzMDIwNTc5IiwiaWF0IjoxNjM4Mzk1NjM4LCJuYmYiOjE2MzgzOTU2MzgsImV4cCI6MTYzODM5OTIzOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.cmALQ-zVlBT0kMeTgvYos5QSLEIyQj_jW6m9z64SKaZ388rWyfctVD4bA622no0HhGRHJsfI-fi43KOX-uTpxsnTYTm2JywhK3lGf460mF5WJ-ODUEetQ1W7ey7BqGor2tzyTGoSUgS2-QuDG_YcU-TB9EgfU9Cr1Px9eVFQrgsxz0h5KEeccyshJFieJZy3gjCg0pJq5vai_1ypMEdcyr2KR2Oo-M5dtW_OeSUZNGdGHTCcOnEuv1GcMIVYITkIiZVKnM646mdbuhyVPvM1wlhd1wt5Me5lcylrlJIsmzx92R3GlLLp220GDwPz3ZDdk6wBOXj7E3N8Jl0L9jDBIw";
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