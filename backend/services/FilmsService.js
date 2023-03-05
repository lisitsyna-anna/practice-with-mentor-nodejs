const FilmsModel = require('../models/filmsModel');

class FilmsService {
	getAllFilms = async () => {
		const filmsCollection = await FilmsModel.find({});

		if (!filmsCollection) {
			throw new Error('Unable to get films from DB');
		}

		return filmsCollection;
	};

	createFilm = async (data) => {
		const film = await FilmsModel.create({ ...data });
		if (!film) {
			throw new Error('Unable to save in DB');
		}

		return film;
	};

	getOneFilm = async (id) => {
		const film = await FilmsModel.findById(id);

		if (!film) {
			throw new Error('Unable to get film from DB');
		}

		return film;
	};
}

module.exports = new FilmsService();
