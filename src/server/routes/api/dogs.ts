import { Router } from "express";
import db from '../../db';
import * as passport from "passport";
// import fetch from "node-fetch";
// import { ReqUser } from "../../types";

const router = Router();


router.get('/:id?', passport.authenticate('jwt'), async (req, res, next) => {

  const dogid = Number(req.params.id);


  if (dogid) {
      try {
          const dog = await db.Dogs.one(dogid);
          res.json(dog);
      } catch (err) {
          console.error(err);
          res.json(err)
      }

  }
  else {
      try {
          const dogs = await db.Dogs.all();
          res.json(dogs);
      } catch (err) {
          console.error(err);
          res.json(err)
      }
  }

})

export default router;

// router.get("/", passport.authenticate("jwt"), async (req: ReqUser, res) => {
//   try {
//     const apiKey =
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoWEkxQlQyOHcwRDY0c2ZkdW0wNlhpc1NNZHJYcDF2bVBoWGlTdnhhVXZqbW10SGJvWCIsImp0aSI6IjdlZjliYzgxZTAyMDkzMGMzNDg2OThhMGJiM2QzMzM4NmNkMzg4NzBmN2VmMDM3M2E4YmNlYTFiZDQ5Nzk1YTM0ZWU2Y2RhN2EyZTBjMWM1IiwiaWF0IjoxNjM4Mzg3MTc0LCJuYmYiOjE2MzgzODcxNzQsImV4cCI6MTYzODM5MDc3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.qDuhVSXn5PFhx6haweCZ0K2tn7Dxs2woEKwqKpvA39tMlN2Mm3kCGnKI7A0WmAoynCODJjy8ra4EunotWWXKQDPftSOBFi6aurbskbGaTO5ok64woltEP-BFsHIlgCuU7fi78fGKPl0xALSRh9nZLsP7Xivw2yv9x8WcePIC_022ozLknDcfz9ih_OEAXuLAWHNjromon6leXlVI1MmuJV_TPbLrgyEfi93kE4g7MBf96tyKO2MZXkjxw0-0lRLJSMbWL_WybxyGQEp780TBF1N7qAuo4QUX-Uku9m00bTe8msPRLNZHSA01WzksVKYZuj_yCcurgclvzady4cW6XQ";
//     const resp = await fetch(`https://api.petfinder.com/v2/animals/`, {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });
//     const body = await resp.json();

//     const allDogs = body.animals.map(
//       (animals: {
//         id: number;
//         name: string;
//         type: string;
//         description: any;
//         age: string;
//         url: string;
//         distance: any;
//         photos: string;
//         videos: string;
//         _links: string;
//         contact: string;
//       }) => {
//         if (animals.type === "Dog") {
//           return {
//             id: animals.id,
//             name: animals.name,
//             type: animals.type,
//             description: animals.description,
//             age: animals.age,
//             url: animals.url,
//             distance: animals.distance,
//             photos: animals.photos,
//             videos: animals.videos,
//             _links: animals._links,
//             contact: animals.contact,
//           };
//         }
//       }
//     );

//     res.json(allDogs.filter((animal: any) => animal));
//   } catch (error) {
//     res.status(500).json({ error: "Something went wrong!" });
//   }
// });

// export default router;
