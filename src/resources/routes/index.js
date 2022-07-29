const newsRouter = require('./news');
const searchRouter = require('./search');
const siteRouter = require('./site');
//const searchRouter = require('./search')

function routes(app) {
  app.use('/news', newsRouter);
  app.use('/search', searchRouter);
  app.use('/', siteRouter);
}

module.exports = routes;
