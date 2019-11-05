const express = require('express');
const movieController = require('../contoller/movies');
const router = express.Router();

router.get('/', movieController.GetAllMovies);
router.post('/add-movie', movieController.CreateMovie);

module.exports = router;