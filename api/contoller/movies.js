const { FetchAllMovies, AddMovie } = require('../../services/Movies');

exports.GetAllMovies = async (req, res, next) => {
  try {
    const movies = await FetchAllMovies();
    if (!movies) { 
      return res.status(404).json({ message: 'No movies found in database!' });
    }
    return res.status(200).json(movies);
  }
  catch (error) {
    res.status(501).json({ message: 'Something went wrong!', error });
  }
} 

exports.CreateMovie = async (req, res, next) => {
  const { IMDbID } = req.body;
  try {
    const newMovie = await AddMovie(IMDbID);
    return res.status(201).json({ newMovie })
  }
  catch(error) {
    return res.status(501).json({ message: 'Something went wrong!', error })
  }
}