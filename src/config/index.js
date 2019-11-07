const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  API_KEY: process.env.API_KEY
};
