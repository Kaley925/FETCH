import { Query } from ".."

const all = async () => Query(
    `SELECT
        cats.id,
        cats.name,
        cats.breed,
        cats.gender,
        cats.age,
        cats.distance,
        cats.shelter
    FROM cats
    ORDER BY created_at DESC`);

const one = async (catid: number) => Query(
    `SELECT
        cats.id,
        cats.name,
        cats.breed,
        cats.gender,
        cats.age,
        cats.distance,
        cats.shelter
    FROM cats
    WHERE cats.id = ?`, [catid])

export default {
    all,
    one
}