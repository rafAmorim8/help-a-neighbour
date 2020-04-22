const express = require('express');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello');
});

routes.post('/sessions', SessionController.store);

module.exports = routes;