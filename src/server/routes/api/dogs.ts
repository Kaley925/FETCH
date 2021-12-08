import { Router } from "express";
import * as passport from "passport";
import fetch from "node-fetch";
import { ReqUser } from "../../types";

const router = Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    try {
        const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6ImJkM2JmNTkyOGZmYzlkNDcyOWFjOTUwYmVhOGIwOGMwMjM2ZDQxYzFlYzNhNzNhMjgwMDRmYTQxNTc1YzRlYTc3YTk5ODg5NjY4YTk3YjE1IiwiaWF0IjoxNjM4OTA1MjE1LCJuYmYiOjE2Mzg5MDUyMTUsImV4cCI6MTYzODkwODgxNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.CThyaOUShNYbbSxx5ae-zxexYEN6r7j6g6M96tYwUk5MXOIues7jTSKkNvjMnOXsGXgVJdtIufRvuJ-CzNptkL40j-qsemvt-6qP4vsWBVDWSYkZ2gWQh3BUkS3BrFsHTNoz__c03E6NCbiYRiISFZXBkvPyfTuMDxb-SBAdoxUOlsA9TYjOhMHlxOtD56XnE3chHns4VATVoCM_rMh9S5piH34Q9ytRz6-pem-P35y3yjiqXxCfup8eg3FWGkyAc-mARA6MmdiMNyKv3OuRLAPhKiIMe5qUPE01pYXB7nxSJUoX2JZOR98YzaXi4wwjufR7sZYrU-t4TS7z8TvHkQ";
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
