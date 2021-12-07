import { Router } from "express";
import * as passport from "passport";
import fetch from "node-fetch";
import { ReqUser } from "../../types";

const router = Router();

router.get("/", passport.authenticate("jwt"), async (req: ReqUser, res) => {
  try {
    const apiKey =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjJkMjllODVkOGY0Mzg2OWM4MzgwMjI5MjE1NjE1Y2U2MWU1NTAwODAxOWViNDZlYWM0ZGQ2OWE3MmRmNTk0ZGZkMTRjYWNjMTdiOGZlZDVkIiwiaWF0IjoxNjM4ODk4NDMxLCJuYmYiOjE2Mzg4OTg0MzEsImV4cCI6MTYzODkwMjAzMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.rKdspPBQdt-QY5BLplrrsuY8w4rihYxA7MXCt8o2TkICnnSx-0KP2h3KnWFcG93sbCEIzriN97SQuvYg3i-hXtktWd3462jUwzw78J4xsdbZobq6JASjHv5y985w33CzWxaSyFEG55ck0f0jUejy8YrdvR6tW7ne1ntM3IbBXYO0KI3F58CeP0bBvuo75jTbu-ltk0W8rA1drJeWcosUyuwc3I2GN24n4KfRxvOOACb3jY6r0LAbVieXmYj07St2-jOTUrNrmow65GNPN11djnAAT8FnLUBAPz4RWfyHQt-HB5y-fnvTIJr73k4LS015HwwIaALvcDl7Pn5WKQ13Dg";
    const resp = await fetch(`https://api.petfinder.com/v2/animals`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const body = await resp.json();

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
