const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../DataBase');

postsRouter.use((req, res, next) => {

  next(); // THIS IS DIFFERENT
});

postsRouter.get('/', async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts
  });
});

module.exports = postsRouter;