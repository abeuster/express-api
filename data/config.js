//const mysql = require('mysql'); //Original
import mysql from 'mysql';

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'api',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
//module.exports = pool; //Original
export default pool;