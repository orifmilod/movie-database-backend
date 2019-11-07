const mongooseLoader = require('./mongooseLoader');
const expressLoader = require('./expressLoader');
const resolveMiddlewares = require('./middlewareLoader');

async function init(app) {
  try {
    await resolveMiddlewares(app);
    console.log('Middlewares resolved');

    await expressLoader(app);
    console.log('Express Intialized');

    await mongooseLoader();
    console.log('MongoDB Intialized');
  } catch (error) {
    console.log('error', error);
  }
}

module.exports = { init };
