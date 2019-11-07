const mongooseLoader = require('./mongooseLoader');
const expressLoader = require('./expressLoader');

async function init({ expressApp }) {
  await expressLoader({ app: expressApp });
  console.log('Express Intialized');
  await mongooseLoader();
  console.log('MongoDB Intialized');
}

module.exports = { init };
