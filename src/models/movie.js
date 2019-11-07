const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  Ratings: Array,
  Metascore: Number,
  imdbRating: Number,
  imdbVotes: String,
  imdbID: String,
  Type: String,
  DVD: String,
  BoxOffice: String,
  Production: String,
  Website: String,
  Response: String
});

// Performs sorting based on provided object properties
movieSchema.query.objectSort = function({ orderBy = 'Title', order = 'ASC' }) {
  return this.sort({ [orderBy]: order === 'ASC' ? 1 : -1 });
};

// Perform filtering based on object params
movieSchema.query.filterByObject = function({ columns, values }) {
  if (!columns || !values) {
    return this;
  }

  const Options = {};
  const forceArray = item => (Array.isArray(item) ? item : item.split(','));

  columns = forceArray(columns);
  values = forceArray(values);

  for (let i = 0; columns.length > i; i++) {
    const Column = columns[i];
    // Check if provided columns exists in collection schema
    const SchemaPath = this.schema.path(Column);

    if (SchemaPath) {
      const Value = values[i];

      // Use regex search for string type columns
      Options[Column] =
        SchemaPath.instance === 'String' ? new RegExp(Value) : Value;
    }
  }
  return this.find(Options);
};

movieSchema.query.paginate = require('../services/utils');

module.exports = mongoose.model('Movie', movieSchema, 'movies');
