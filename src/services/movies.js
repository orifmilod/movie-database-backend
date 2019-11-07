const mongoose = require('mongoose');
const Movie = require('../models/movie');

const { getMovieByTitle } = require('../api/Omdb');

async function fetchAllMovies(query) {
  const movies = await Movie.find()
    .filterByObject(query)
    .objectSort(query)
    .paginate(query);
  return { movies };
}

async function addMovie(movieTitle) {
  // If movie already exists in db
  const movieFromDb = await Movie.findOne({ Title: movieTitle });
  if (movieFromDb) {
    return movieFromDb;
  }

  const data = await getMovieByTitle(movieTitle);
  if (!data) throw new Error('No such movie was found');

  const newMovie = new Movie({
    _id: mongoose.Types.ObjectId(),
    ...data
  });
  const result = await newMovie.save();
  return result;
}
module.exports = { fetchAllMovies, addMovie };
