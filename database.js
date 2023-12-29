// backend/database.js

const mysql = require('mysql2/promise');

async function initializeDatabase() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });

    // Create tables if needed
    // ...

    return connection;
}

module.exports = {
    initializeDatabase
};
