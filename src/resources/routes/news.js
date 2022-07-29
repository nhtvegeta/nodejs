const express = require('express');
const newsRouter = express.Router();
const NewsController = require('../app/controllers/NewsControllers');

newsRouter.get('/:slug', NewsController.show);

newsRouter.get('/', NewsController.index);

module.exports = newsRouter;
