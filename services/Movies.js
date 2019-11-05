const mongoose = require('mongoose');
const Movie = require('../models/movie');
const Axios = require('axios');

async function FetchAllMovies ()  {
  const data = await Movie.find();
  return { movies: data }
}

async function AddMovie(IMDbID) {
  const response = await Axios.get(`http://www.omdbapi.com/?i=${IMDbID}&apikey=89e52f21`);
  const { data } = response;
  const newMovie = new Movie({ _id : mongoose.Types.ObjectId(), ...data });
  const result = await newMovie.save();
  return result;
}
module.exports = { FetchAllMovies, AddMovie }