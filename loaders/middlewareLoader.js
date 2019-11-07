const middlewares = require('../middleware');

async function resolveMiddlewares(app) {
  for (const mw of middlewares) {
    await mw(app);
  }
}
module.exports = resolveMiddlewares;
