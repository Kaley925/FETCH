import { Router } from 'express';
import * as passport from 'passport';
import fetch from 'node-fetch'
import { ReqUser } from '../../types';

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6ImE2ZDYzMWQ5YjU5NzY2YTQzNzE5OTgwMmNjNDRmMjM2MjY4NTY5MGJiMjIzZDBlOTc4NGU0NjYyMDI5MGZmMDgzZDgyZGM0MzVmZWNkOTQ3IiwiaWF0IjoxNjM4MzA1OTA3LCJuYmYiOjE2MzgzMDU5MDcsImV4cCI6MTYzODMwOTUwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.CG6KMPDXyBV3Tn63D3wqAZTu36xWN9kwSh8zOc6RZ7BK31tGO9Sd9L01HPLbUqVrVOQPEHi6inv0jwmagSk8pZraCWReSLRSyHiU4GmC-xq3jlYDRgxrjn2Z1EhS9JebrIUpponHSx0a1zfEf7NXo1WR6zvG6wG0ECCl1uEo69l5M0uZcaJI8cADnIudQZnpTtGpO6qhpgL8tLj39HDrG_UM9buJyrAugt_a50sJVLUW25WBehkxP_kXN6NkD_l02O-Ll-Gqsj6kOVNSy69n-1kO3ayrvtG6OCuBgpGJkIFSxTtWxxmMEWiZkInWmFwChX6l1AwMU5V2p2FTns1lZg";
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