const mongoose = require('mongoose');
const Movie = require('../models/movie');
const Axios = require('axios');

async function FetchAllMovies ()  {
  const movies = await Movie.find();
  return { movies };
}

async function AddMovie(IMDbID) {
  const response = await Axios.get(`http://www.omdbapi.com/?i=${IMDbID}&apikey=89e52f21`);
  const { data } = response;
  const newMovie = new Movie({ 
    _id : mongoose.Types.ObjectId(), 
    Comments: [],
    ...data, 
  });
  const result = await newMovie.save();
  return result;
}
module.exports = { FetchAllMovies, AddMovie }