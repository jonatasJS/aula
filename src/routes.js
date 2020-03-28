const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

routes.post('/login', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
}), sessionController.index)

routes.get('/ongs', ongController.index)
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ongController.create)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}), profileController.index)

routes.get('/incident', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), incidentController.index)
routes.post('/incident', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    desciption: Joi.string().required(),
    value: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown()
}), incidentController.create)
routes.delete('/incident/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), incidentController.delete)

module.exports = routes;
