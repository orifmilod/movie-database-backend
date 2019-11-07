const express = require('express');
const { celebrate, Joi, errors } = require('celebrate');
const { addComment, getAllComments } = require('../controller/comments');

const router = express.Router();

router.get('/', getAllComments);
router.post(
  '/',
  celebrate({
    body: Joi.object({
      comment: Joi.string().required(),
      movieTitle: Joi.string().required()
    })
  }),
  addComment
);

router.use(errors());
module.exports = router;
