const api = require('../api');

async function expressLoader(app) {
  // API endpoints
  app.use(api());
}
module.exports = expressLoader;
