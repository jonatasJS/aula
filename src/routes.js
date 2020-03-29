const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

routes.post('/login',  sessionController.index)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', profileController.index)

routes.get('/incident', incidentController.index)
routes.post('/incident', incidentController.create)
routes.delete('/incident/:id', incidentController.delete)

module.exports = routes;
