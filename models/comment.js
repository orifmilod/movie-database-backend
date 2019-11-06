const mongoose = require('mongoose');

const comment = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  comment:  { type: String, required: true },
  movieTitle: { type: String, required: true }
});

module.exports = mongoose.model('Comment', comment, 'comments');