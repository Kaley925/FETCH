import { Query } from "../"

const all = async () => Query(
    `SELECT
        pets.id,
        pets.name,
        pets.breed
    FROM pets
    ORDER BY created_at DESC`);

const one = async (petsid: number) => Query(
    `SELECT
        pets.id,
        pets.name,
        pets.breed
    FROM pets
    WHERE pets.id = ?`, [petsid])

export default {
    all,
    one
}