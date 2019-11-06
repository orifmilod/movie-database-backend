const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('../api');

async function mongooseLoader({ app }) {
  app.use(cors());
  // Body parser middleware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // API endpoint
  app.use(api());
}
module.exports = mongooseLoader;
