const express = require('express');
const app = express();

// API Routes
const moviesRoute = require('./api/routes/movies');
const commentsRoute = require('./api/routes/comments');

app.use('/api/movies', moviesRoute);
app.use('/api/comments', commentsRoute);

module.exports = app;