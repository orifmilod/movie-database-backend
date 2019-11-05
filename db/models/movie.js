const mongoose = require('mongoose');

const movie = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Title:      String,
  Year:       String,
  Rated:      String,
  Released:   String,
  Runtime:    String,
  Genre:      String,
  Director:   String,
  Writer:     String,
  Actors:     String,
  Plot:       String,
  Language:   String,
  Country:    String,
  Awards:     String,
  Poster:     String,
  Ratings:    Array,
  Metascore:  Number,
  imdbRating: Number,
  imdbVotes:  String,
  imdbID:     String,
  Type:       String,
  DVD:        String,
  BoxOffice:  String,
  Production: String,
  Website:    String,
  "Response": String
});
module.exports = mongoose.model('Movie', movie, 'movies');
