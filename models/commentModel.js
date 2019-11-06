const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  comment: { type: String, required: true, trim: true },
  movieID: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    required: true,
    ref: 'Movie'
  }
});

// Implemented pagination
commentSchema.query.paginate = require('../services/utils');

module.exports = mongoose.model('Comment', commentSchema, 'comments');
