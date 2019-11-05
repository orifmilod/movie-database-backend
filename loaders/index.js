const mongooseLoader = require('./mongooseLoader');
const expressLoader = require('./expressLoader');

async function init({ expressApp }) {
  const mongoConnection = await mongooseLoader();
  console.log('MongoDB Intialized');
  await expressLoader({ app: expressApp });
  console.log('Express Intialized');
}

module.exports = { init };