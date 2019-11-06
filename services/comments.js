const mongoose = require('mongoose');
const Comment = require('../models/commentModel');
const movie = require('../models/movieModel');

async function fetchAllComments(query) {
  // Filter by movie ID
  let comments = await Comment.find();
  if (query.movieID) {
    try {
      comments = await comments.find({ movieID: query.movieID });
      await comments.paginate(query);
    } catch (error) {
      throw new Error('Invalid Params');
    }
  }
  if (!comments.length) {
    throw new Error('No comments were found');
  }
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
