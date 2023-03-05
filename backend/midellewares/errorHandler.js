module.exports = (error, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const mode = process.env.NODE_ENV === 'development' ? error.stack : null;
	res.json({
		code: statusCode,
		stack: mode,
	});
};
