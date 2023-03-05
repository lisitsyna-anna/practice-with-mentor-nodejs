// {
// "title": "Harry Potter",
// "year": "2000",
// "rating": "9.5",
// "director": "Andriy"
// }

const { model, Schema } = require('mongoose');

const filmSchema = Schema(
	{
		title: {
			required: [true, 'DB: title is required'],
			type: String,
		},
		year: {
			type: Number,
			default: 1985,
		},
		rating: {
			required: [true, 'DB: rating is required'],
			type: Number,
		},
		director: {
			type: String,
			default: 'Kventin Tarantino',
		},
	},
	{ versionKey: false, timestamps: true }
);

module.exports = model('Film', filmSchema);
