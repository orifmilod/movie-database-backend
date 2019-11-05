const express = require('express');
const router = express.Router();
const movies = require('./routes/movies');

// guaranteed to get dependencies
function api () {
  router.use('/api/movies', movies);
	return router;
}

module.exports = api;