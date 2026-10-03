const express = require('express');
const routes = express.Router();
const pageControllers = require('../controllers/pageControllers');
routes.get('/', pageControllers.home);
routes.get('/about', pageControllers.about);
routes.get('/contact', pageControllers.contact);

module.exports = routes;