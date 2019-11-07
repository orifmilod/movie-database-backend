const mongoose = require('mongoose');
const { paginate } = require('../services/utils');

const movieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  year: String,
  rated: String,
  released: String,
  runtime: String,
  genre: String,
  director: String,
  writer: String,
  actors: String,
  plot: String,
  language: String,
  country: String,
  awards: String,
  poster: String,
  ratings: Array,
  metascore: Number,
  imdbRating: Number,
  imdbVotes: String,
  imdbID: String,
  type: String,
  dVD: String,
  boxOffice: String,
  production: String,
  website: String,
  response: String
});

// Performs sorting based on provided object properties
movieSchema.query.objectSort = function({ orderBy = 'title', order = 'ASC' }) {
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

movieSchema.query.paginate = paginate;
module.exports = mongoose.model('Movie', movieSchema, 'movies');
