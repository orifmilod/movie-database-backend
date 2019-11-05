const Movie = require('../../db/models/movie');
const Axios  = require('axios');
const mongoose = require('mongoose');

exports.GetAllMovies = async (req, res, next) => {
  try {
    const data = await Movie.find();
    if (!data) { 
      return res.status(404).json({ message: 'No movies found in database!' });
    }
    return res.status(200).json(data);
  }
  catch (error) {
    res.status(501).json({ message: 'Something went wrong!', error });
  }
} 

exports.CreateMovie = async (req, res, next) => {
  const { id } = req.body;
  try {
    const response = await Axios.get(`http://www.omdbapi.com/?i=${id}&apikey=89e52f21`);
    const { data } = response;
    const newMoview = new Movie({ 
      _id : mongoose.Types.ObjectId(),
      ...data
    });
    const result = await newMoview.save();
    return res.status(201).json(result)
  }
  catch(error) {
    return res.status(501).json({ message: 'Something went wrong!', error })
  }
}