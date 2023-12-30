// backend/sequelize.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'  // or 'postgres', 'sqlite', etc.
});

const BlogPost = require('./models/BlogPost');
const User = require('./models/User');
const Comment = require('./models/Comment');

// Associations
User.hasMany(BlogPost);
BlogPost.belongsTo(User);

BlogPost.hasMany(Comment);
Comment.belongsTo(BlogPost);

module.exports = sequelize;