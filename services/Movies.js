const mongoose = require('mongoose');
const Movie = require('../models/movie');
const Axios = require('axios');

async function FetchAllMovies ()  {
  const movies = await Movie.find();
  return { movies };
}

async function AddMovie(movieTitle) {
  const response = await Axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.API_KEY}`);
  const { data } = response;
  const newMovie = new Movie({ 
    _id : mongoose.Types.ObjectId(), 
    Comments: [],
    ...data, 
  });
  const result = await newMovie.save();
  return result;
}
module.exports = { FetchAllMovies, AddMovie };