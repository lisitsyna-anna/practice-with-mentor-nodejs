const express = require('express');
const path = require('path');
const configPath = path.join(__dirname, '..', 'config', '.env');
require('colors');
require('dotenv').config({ path: configPath });
const connectDB = require('../config/db');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', require('./routers/filmsRoutes'));

app.use('*', (req, res, next) => {
	res.status(404).json({
		code: 404,
		message: 'Not found',
	});

	next();
});

app.use(require('./midellewares/errorHandler'));

connectDB();
app.listen(process.env.PORT, () => {
	console.log(
		`Server is running on port ${process.env.PORT}`.green.bold.italic
	);
});
