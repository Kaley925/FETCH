
import { Router } from "express";
import * as passport from "passport";
import fetch from "node-fetch";
import { ReqUser } from "../../types";

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjYwZTc4ZGU0OWFmNDk1ODBkMzk0NDRlNDU4N2M5YWExNmQxNGI3MGE5NzJmZmZiZmU4ZWU0MzkwYzJkOTM1YTdlYzQyNWZlZGI4ZmJiZTEyIiwiaWF0IjoxNjM4OTAzNjc3LCJuYmYiOjE2Mzg5MDM2NzcsImV4cCI6MTYzODkwNzI3Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.yCa1CiCnMGgAby5dz02Me0bolH75bqTPB9PwhzD0G2jUNlQ56IwpXoF_7EGyMiVniduJwOxbOwtCusLHW6d52cvSW36q-ZNFYQ4uEZ7Nviq6GPSS_rFyX4OGj59D55AllOFlRxFPqholaZymAHuBg7tEV2KU2itBWqpH8B05WkWix7F5y_jOUJynla-cx_BxSAkGO0jb3hpv7Nw2-7CXjHMVeW0Vp2XZVBBJmYP87MfEM6QWE4hXMZT9buEoXYaYBnsueNLLTKSpLjKEEdf17eQ6cphPwQWchZjg07BQbBYLxmIE1cYhQ0iuTWjoYt65PikIPk3XHYj7XZVrVFEupw";
        const resp = await fetch(`https://api.petfinder.com/v2/animals`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
        })
        const body = await resp.json()


    const allCats = body.animals.map(
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
        if (animals.type === "Cat") {
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

    res.json(allCats.filter((animal: any) => animal));
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

export default router;
