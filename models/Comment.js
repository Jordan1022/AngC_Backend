// backend/models/Comment.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    // Other fields as needed
});

module.exports = Comment;
