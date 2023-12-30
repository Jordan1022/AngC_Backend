// backend/models/BlogPost.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const BlogPost = sequelize.define('BlogPost', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    // Add more fields as needed
});

module.exports = BlogPost;
