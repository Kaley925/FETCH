
import { Query } from ".."

const all = async () => Query(

    `SELECT
        dogs.id,
        dogs.name,
        dogs.breed,
        dogs.gender,
        dogs.age,
        dogs.distance,
        dogs.shelter
    FROM dogs

    ORDER BY created_at DESC`);

const one = async (dogid: number) => Query(

    `SELECT
        dogs.id,
        dogs.name,
        dogs.breed,
        dogs.gender,
        dogs.age,
        dogs.distance,
        dogs.shelter
    FROM dogs

    WHERE dogs.id = ?`, [dogid])

export default {
    all,
    one
}

