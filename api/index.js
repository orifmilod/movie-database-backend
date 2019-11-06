const express = require('express');

const router = express.Router();
const movies = require('./routes/movies');
const comments = require('./routes/comments');

// guaranteed to get dependencies
function api() {
  router.use('/api/v1/movies', movies);
  router.use('/api/v1/comments', comments);
  return router;
}

module.exports = api;
