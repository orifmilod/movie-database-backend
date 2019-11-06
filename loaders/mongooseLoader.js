const mongoose = require('mongoose');
const { DB_URL } = require('../config');

async function mongooseLoader() {
  // Connecting to DB
  const mongoConnection = await mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return mongoConnection.connection.db;
}

module.exports = mongooseLoader;
