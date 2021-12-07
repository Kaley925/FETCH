import { Query } from "../"
import { MysqlResponse, UsersTable } from "../models";


const find = async (column: string, value: string) =>
    Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);

const insert = async (newUser: { name: string, email: string, password: string }) =>
    Query<MysqlResponse>('INSERT INTO users SET ?', newUser);

const all = async () => Query(
    `SELECT
        users.id,
        users.name
    FROM users
    ORDER BY created_at ASC`);

const one = async (usersid: number) => Query(
    `SELECT
        users.id,
        users.name
    FROM users
    WHERE users.id = ?`, [usersid])

export default {
    find,
    insert,
    all,
    one,
}