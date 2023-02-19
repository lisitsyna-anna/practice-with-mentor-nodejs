const fs = require('fs/promises');
const path = require('path');

// console.log(__dirname);
// console.log(__filename);

const filmsPath = path.join(__dirname, '..', 'db', 'films.json');
// console.log(filmsPath);

class FileOperations {
	constructor(filmsPath) {
		this.filmsPath = filmsPath;
	}
	async read() {
		return await fs.readFile(this.filmsPath, 'utf8');
	}

	async create(data) {
		return await fs.writeFile(this.filmsPath, JSON.stringify(data, null, 2));
	}

	async remove() {
		return await fs.unlink(this.filmsPath);
	}

	async update(newFilm) {
		const films = JSON.parse(await this.read());
		const newFilms = [...films, newFilm];
		return await fs.writeFile(
			this.filmsPath,
			JSON.stringify(newFilms, null, 2)
		);
	}

	async dispay() {
		console.log(await this.read());
	}
}

const file = new FileOperations(filmsPath);

// file.dispay();
const data = [
	{
		id: '10',
		title: 'Harry Potter',
		year: '2009',
	},
	{
		id: '20',
		title: 'Street hings',
		year: '2010',
	},
	{
		id: '30',
		title: 'Forest Gump',
		year: '1990',
	},
];

asyncHandler(file.create(data));

// const newFilm = { id: '40', title: 'Star wars', year: '1980' };
// asyncHandler(file.update(newFilm));

function asyncHandler(func) {
	return function () {
		try {
			func();
		} catch (error) {
			console.log(error);
		}
	};
}
