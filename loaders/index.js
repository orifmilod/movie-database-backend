const mongooseLoader = require('./mongooseLoader');
const expressLoader = require('./expressLoader');

async function init({ expressApp }) {
  await mongooseLoader();
  console.log('MongoDB Intialized');
  await expressLoader({ app: expressApp });
  console.log('Express Intialized');
}

module.exports = { init };
