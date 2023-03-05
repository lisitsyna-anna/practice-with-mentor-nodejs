const express = require('express');

const filmsRouter = express.Router();

const filmsController = require('../controllers/FilmsController');

// http://localhost:5050/api/v1/films
// Добавить фильм
filmsRouter.post(
	'/films',
	(req, res, next) => {
		console.log('Worked Joi');
		next();
	},
	filmsController.add
);

// Получить один фильм
filmsRouter.get('/films/:id', filmsController.getOne);

// Получить все фильмы
filmsRouter.get('/films', filmsController.getAll);

// Обновить один фильм
filmsRouter.put('/films/:id', filmsController.updateOne);

// Удалить фильм
filmsRouter.delete('/films/:id', filmsController.removeOne);

module.exports = filmsRouter;
