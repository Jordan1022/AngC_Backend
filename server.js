// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const { initializeDatabase } = require('./database');

// Database connection
let db;
initializeDatabase().then(connection => {
    db = connection;
});

sequelize.sync({ force: false }).then(() => {
    console.log("Database synced");
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch(err => console.error("Sync failed: ", err));

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Blog backend listening at http://localhost:${port}`);
});

// Routes
const BlogPost = require('./models/BlogPost');

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await BlogPost.findAll();
        res.json(posts);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const newPost = await BlogPost.create(req.body);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await BlogPost.findByPk(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('Post not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.put('/api/posts/:id', async (req, res) => {
    try {
        const updated = await BlogPost.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            res.json({ message: 'Post updated successfully' });
        } else {
            res.status(404).send('Post not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.delete('/api/posts/:id', async (req, res) => {
    try {
        const deleted = await BlogPost.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).send('Post not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});



// ... rest of the server code .