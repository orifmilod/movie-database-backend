const express = require('express');
const { celebrate, Joi, errors } = require('celebrate');
const { getAllMovies, createMovie } = require('../controller/movies');

const router = express.Router();

router.get('/', getAllMovies);
router.post(
  '/',
  celebrate({
    body: Joi.object({
      title: Joi.string().required()
    })
  }),
  createMovie
);

router.use(errors());
module.exports = router;
