const ObjectId = require('mongoose').Types.ObjectId;
const FilmsModel = require('../models/filmsModel');
const asyncHandler = require('express-async-handler');
const filmsService = require('../services/FilmsService');

class FilmsController {
	// add = asyncHandler(async (req, res) => {
	// 	const { title, rating } = req.body;
	// 	if (!title || !rating) {
	// 		res.status(400);
	// 		throw new Error('Provide all required fields');
	// 	}

	// 	const film = await FilmsModel.create({ ...req.body });
	// 	if (!film) {
	// 		res.status(400);
	// 		throw new Error('Unable to save in DB');
	// 	}

	// 	res.status(201).json({
	// 		code: 201,
	// 		status: 'success',
	// 		data: {
	// 			film,
	// 		},
	// 	});
	// });

	add = asyncHandler(async (req, res) => {
		const { title, rating } = req.body;
		if (!title || !rating) {
			res.status(400);
			throw new Error('Provide all required fields');
		}

		const film = await filmsService.createFilm(req.body);

		res.status(201).json({
			code: 201,
			status: 'success',
			data: {
				film,
			},
		});
	});

	// getAll = asyncHandler(async (req, res) => {
	// 	// const filmsCollection = await FilmsModel.find({});
	// 	const filmsCollection = await filmsService.getAllFilms();

	// 	if (!filmsCollection) {
	// 		res.status(400);
	// 		throw new Error('Unable to get films from DB');
	// 	}

	// 	res.status(200).json({
	// 		code: 200,
	// 		status: 'success',
	// 		data: {
	// 			filmsCollection,
	// 			quntity: filmsCollection.length,
	// 		},
	// 	});
	// });

	getAll = asyncHandler(async (req, res) => {
		const filmsCollection = await filmsService.getAllFilms();

		res.status(200).json({
			code: 200,
			status: 'success',
			data: {
				filmsCollection,
				quntity: filmsCollection.length,
			},
		});
	});

	getOne = asyncHandler(async (req, res) => {
		const { id } = req.params;
		console.log(typeof ObjectId);

		// if (ObjectId.isValid(id)) {
		// res.status(400);
		// throw new Error('Id is not valid');
		// }

		if (ObjectId.isValid(id)) {
			if (String(new ObjectId(id)) === id) {
				const film = await filmsService.getOneFilm(id);
				return res.status(200).json({
					code: 200,
					status: 'success',
					data: {
						film,
					},
				});
			}
			throw new Error('Id is not valid');
		}
		throw new Error('Id is not valid');
	});

	updateOne = (req, res) => {
		res.send('Anna is updating one film');
	};

	removeOne = (req, res) => {
		res.send('Anna is deliting one film');
	};
}

module.exports = new FilmsController();
