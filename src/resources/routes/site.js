const express = require('express');
const siteRouter = express.Router();
const siteController = require('../app/controllers/SiteControllers');

siteRouter.get('/', siteController.index);

siteRouter.use('/search', siteController.search);

siteRouter.get('/news', siteController.news);

module.exports = siteRouter;
