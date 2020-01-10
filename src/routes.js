const express = require('express');
const routes = express.Router();

const cardController = require('./controllers/cardController');
const transactionsController = require('./controllers/transactionsController');


routes.post('/card', cardController.index);
routes.get('/cardall', cardController.all);
routes.post('/transact', transactionsController.index);

module.exports = routes;