import { Router } from "express";
import * as passport from "passport";
import fetch from "node-fetch";
import { ReqUser } from "../../types";

const router = Router();

<<<<<<< HEAD
router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjFmYjBiMjFhNDdhNDAyYzU0NzQxZDMxNTZiODE4NjEwMDQzYjZlZDE4M2I0ZDVjYzg0NDk4MjBhY2E3YTY2NWY5YjU5NzQ1NDdjMzQyODhlIiwiaWF0IjoxNjM4ODMxMDY3LCJuYmYiOjE2Mzg4MzEwNjcsImV4cCI6MTYzODgzNDY2Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.NA6WdiIPnd-2w8HRie-zmjbl0r8VWZDNbqQUOhBqNsoFB-ynBn-6Ig4nYTB5r4HHGCcVRN9yZ5mUkmZVzYFIjW95KNh36454JTlOJFb4Gj8qWsQX8gr9rCL6X5FwCYXFM4D7W2lhfwkNJUafqb15gCQi1F0TnrDk-mSQnAIObLJ_O0jYQqwHrjtijf7c1d-UgmHBP1STcLI9U9Br8cCI2qc9noHdvF173gG9ZsSkHAtUtVViV46_ZGThlYdPz9rhcwnXbEIokhCEXO8TTt1P82qjf63Awnha2ecA_x4sktt5iYFsy18guiOwaf-4eAnaCAIF6b7ynUcqeKGP_s6S_w";
        const resp = await fetch(`https://api.petfinder.com/v2/animals/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
        })
        const body = await resp.json()
=======
router.get("/", passport.authenticate("jwt"), async (req: ReqUser, res) => {
  try {
    const apiKey =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjdlZjliYzgxZTAyMDkzMGMzNDg2OThhMGJiM2QzMzM4NmNkMzg4NzBmN2VmMDM3M2E4YmNlYTFiZDQ5Nzk1YTM0ZWU2Y2RhN2EyZTBjMWM1IiwiaWF0IjoxNjM4Mzg3MTc0LCJuYmYiOjE2MzgzODcxNzQsImV4cCI6MTYzODM5MDc3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.qDuhVSXn5PFhx6haweCZ0K2tn7Dxs2woEKwqKpvA39tMlN2Mm3kCGnKI7A0WmAoynCODJjy8ra4EunotWWXKQDPftSOBFi6aurbskbGaTO5ok64woltEP-BFsHIlgCuU7fi78fGKPl0xALSRh9nZLsP7Xivw2yv9x8WcePIC_022ozLknDcfz9ih_OEAXuLAWHNjromon6leXlVI1MmuJV_TPbLrgyEfi93kE4g7MBf96tyKO2MZXkjxw0-0lRLJSMbWL_WybxyGQEp780TBF1N7qAuo4QUX-Uku9m00bTe8msPRLNZHSA01WzksVKYZuj_yCcurgclvzady4cW6XQ";
    const resp = await fetch(`https://api.petfinder.com/v2/animals/`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const body = await resp.json();
>>>>>>> 2be263b8fd07d897bd4b403635b5a68e37729ff3

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
