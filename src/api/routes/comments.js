const express = require('express');
const { celebrate, Joi, errors } = require('celebrate');
const commentController = require('../controller/comments');

const router = express.Router();

router.get('/', commentController.getAllComments);
router.post(
  '/',
  celebrate({
    body: Joi.object({
      comment: Joi.string().required(),
      movieTitle: Joi.string().required()
    })
  }),
  commentController.addComment
);

router.use(errors());
module.exports = router;
