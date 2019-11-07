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

async function addMovie(title) {
  const data = await getMovieByTitle(title);
  if (!data) throw new Error('No such movie was found');

  // If movie already exists in db
  const movieFromDb = await Movie.findOne({ title: data.Title });
  if (movieFromDb) {
    return movieFromDb;
  }

  const newMovie = new Movie({
    _id: mongoose.Types.ObjectId(),
    title: data.Title,
    year: data.Year,
    rated: data.Rated,
    released: data.Released,
    runtime: data.Runtime,
    genre: data.Genre,
    director: data.Director,
    writer: data.Writer,
    actors: data.Actors,
    plot: data.Plot,
    language: data.Language,
    country: data.Country,
    awards: data.Awards,
    poster: data.Poster,
    ratings: data.Ratings,
    metascore: data.Metascore,
    imdbRating: data.imdbRating,
    imdbVotes: data.imdbVotes,
    imdbID: data.imdbID,
    type: data.Type,
    dVD: data.DVD,
    boxOffice: data.BoxOffice,
    production: data.Production,
    website: data.Website,
    response: data.Response
  });
  const result = await newMovie.save();
  return result;
}
module.exports = { fetchAllMovies, addMovie };
