// backend/database.js

const mysql = require('mysql2/promise');

async function initializeDatabase() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'your_username',
        password: 'your_password',
        database: 'your_database'
    });

    // Create tables if needed
    // ...

    return connection;
}

module.exports = {
    initializeDatabase
};
