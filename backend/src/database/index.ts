import mysql from 'mysql';

import { config } from '../Config';

export const database = mysql.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.username,
    password: config.database.password,
    database: config.database.db,
});
