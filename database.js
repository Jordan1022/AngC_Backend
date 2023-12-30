// backend/database.js

const mysql = require('mysql2/promise');

async function initializeDatabase() {
    // Connect to MySQL server without specifying a database
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    });

    const dbName = process.env.DB_NAME;

    // Create the database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${mysql.escapeId(dbName)}`);
    await connection.end();

    // Connect to the newly created database
    const dbConnection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: dbName
    });

    // Further initialization like creating tables
    // ...

    return dbConnection;
}

module.exports = {
    initializeDatabase
};
