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

import Dogs from './queries/dogs';
import Cats from './queries/cats';
import Users from './queries/users';

export default {
    Dogs,
    Cats,
    Users,
}