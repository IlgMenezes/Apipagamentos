const express = require('express');
const routes = express.Router();

const cardController = require('./controllers/cardController');
const transactionsController = require('./controllers/transactionsController');


routes.get('/card', cardController.index);
routes.post('/cardall', cardController.all);
routes.get('/transact', transactionsController.index);

module.exports = routes;