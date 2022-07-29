const express = require('express');
const searchRouter = express.Router();
const NewsController = require('../app/controllers/SearchControllers');

searchRouter.use('/', NewsController.index);

module.exports = searchRouter;
