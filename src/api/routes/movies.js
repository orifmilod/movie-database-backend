const express = require('express');
const { celebrate, Joi, errors } = require('celebrate');
const movieController = require('../controller/movies');

const router = express.Router();

router.get('/', movieController.getAllMovies);
router.post(
  '/',
  celebrate({
    body: Joi.object({
      movieTitle: Joi.string().required()
    })
  }),
  movieController.createMovie
);

router.use(errors());
module.exports = router;
