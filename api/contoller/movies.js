const { fetchAllMovies, addMovie } = require('../../services/movies');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await fetchAllMovies();
    if (!movies) {
      return res.status(404).json({ message: 'No movies found in database!' });
    }
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong, when trying to fetch movies!',
      error
    });
  }
};

exports.createMovie = async (req, res) => {
  const { movieTitle } = req.body;
  try {
    const newMovie = await addMovie(movieTitle);
    return res.status(201).json({ newMovie });
  } catch (error) {
    return res
      .status(400)
      .json({ messege: 'Bad request! Could not find movie title', error });
  }
};
