import * as mysql from 'mysql'
import config from '../config'

const Connection = mysql.createConnection(config.db);

export const Query = <T = any>(query: string, values?: any) => {

    return new Promise<T>((resolve, reject) => {
        Connection.query(query, values, (err, res) => {
            if (err) return reject(err);
            return resolve(res);
        })
    })
}

import Pets from './queries/pets';
import Users from './queries/users';
import Favorites from './queries/favorites';

export default {
    Pets,
    Users,
    Favorites
}