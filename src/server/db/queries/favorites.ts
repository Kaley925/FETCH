import { Query } from "../"

const all = async () => Query(
    `SELECT
        favorites.userid,
        favorites.name,
        favorites.breed,
        favorites.location
    FROM favorites
    ORDER BY _created DESC`);

const one = async (favoritesid: number) => Query(
    `SELECT
        favorites.id,
        favorites.name,
        favorites.breed,
        favorites.location
    FROM favorites
    WHERE favorites.id = ?`, [favoritesid])

export default {
    all,
    one
}