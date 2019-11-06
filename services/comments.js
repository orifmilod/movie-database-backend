const mongoose = require('mongoose');
const Comment = require('../models/comment');
const movie = require('../models/movie');

async function fetchAllComments() {
  const comments = await Comment.find();
  return { comments };
}

async function addComment(comment, movieTitle) {
  const foundMovie = await movie.find({ Title: movieTitle });

  const newComment = new Comment({
    _id: mongoose.Types.ObjectId(),
    comment,
    movieTitle: foundMovie[0].Title
  });
  const data = await newComment.save();
  return data;
}

module.exports = { addComment, fetchAllComments };
