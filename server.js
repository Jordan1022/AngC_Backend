// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const BlogPost = require('./models/BlogPost');

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Blog backend listening at http://localhost:${port}`);
});

// backend/server.js
// ... previous code ...

const { initializeDatabase } = require('./database');

// Database connection
let db;
initializeDatabase().then(connection => {
    db = connection;
});

// Routes

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await BlogPost.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/posts', (req, res) => {
    // Create a new blog post
});

app.get('/api/posts/:id', (req, res) => {
    // Retrieve a single blog post
});

app.put('/api/posts/:id', (req, res) => {
    // Update a blog post
});

app.delete('/api/posts/:id', (req, res) => {
    // Delete a blog post
});

// ... rest of the server code .