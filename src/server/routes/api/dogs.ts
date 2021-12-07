import { Router } from "express";
import * as passport from "passport";
import fetch from "node-fetch";
import { ReqUser } from "../../types";

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjFmYjBiMjFhNDdhNDAyYzU0NzQxZDMxNTZiODE4NjEwMDQzYjZlZDE4M2I0ZDVjYzg0NDk4MjBhY2E3YTY2NWY5YjU5NzQ1NDdjMzQyODhlIiwiaWF0IjoxNjM4ODMxMDY3LCJuYmYiOjE2Mzg4MzEwNjcsImV4cCI6MTYzODgzNDY2Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.NA6WdiIPnd-2w8HRie-zmjbl0r8VWZDNbqQUOhBqNsoFB-ynBn-6Ig4nYTB5r4HHGCcVRN9yZ5mUkmZVzYFIjW95KNh36454JTlOJFb4Gj8qWsQX8gr9rCL6X5FwCYXFM4D7W2lhfwkNJUafqb15gCQi1F0TnrDk-mSQnAIObLJ_O0jYQqwHrjtijf7c1d-UgmHBP1STcLI9U9Br8cCI2qc9noHdvF173gG9ZsSkHAtUtVViV46_ZGThlYdPz9rhcwnXbEIokhCEXO8TTt1P82qjf63Awnha2ecA_x4sktt5iYFsy18guiOwaf-4eAnaCAIF6b7ynUcqeKGP_s6S_w";
        const resp = await fetch(`https://api.petfinder.com/v2/animals/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
        })
        const body = await resp.json()

    const allDogs = body.animals.map(
      (animals: {
        id: number;
        name: string;
        type: string;
        description: any;
        age: string;
        url: string;
        distance: any;
        photos: string;
        videos: string;
        _links: string;
        contact: string;
      }) => {
        if (animals.type === "Dog") {
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
            contact: animals.contact,
          };
        }
      }
    );

    res.json(allDogs.filter((animal: any) => animal));
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

export default router;
