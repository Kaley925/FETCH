import { Query } from "../"

const allFavs = async (userid: number) => Query(
    `SELECT
        pets.* 
    FROM pets
    WHERE favorites.userid = ?` [userid]);

export default {
    allFavs
}