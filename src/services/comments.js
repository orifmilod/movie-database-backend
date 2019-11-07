const mongoose = require('mongoose');
const Comment = require('../models/comment');
const Movie = require('../models/movie');

async function fetchAllComments(query) {
  // Filter by movie ID
  const comments = await Comment.find()
    .filterByMovie(query)
    .paginate(query);
  return { comments };
}

async function addComment(comment, movieTitle) {
  const foundMovie = await Movie.findOne({ Title: movieTitle });
  const newComment = new Comment({
    _id: mongoose.Types.ObjectId(),
    comment,
    movieID: foundMovie._id
  });
  const data = await newComment.save();
  return data;
}

module.exports = { addComment, fetchAllComments };
