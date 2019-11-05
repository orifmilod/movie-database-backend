const express = require('express');
const router = express.Router()
const commentController = require('../contoller/comments');
const { celebrate, Joi, errors } = require('celebrate');

router.get('/', commentController.GetAllComments);
router.post('/', celebrate({
  body: Joi.object({
    comment: Joi.string().required(),
    movieTitle: Joi.string().required()
  })
}), commentController.AddComment);

router.use(errors())
module.exports = router;