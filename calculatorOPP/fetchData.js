const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((elem) => Number(elem));

module.exports = {
	operation,
	numbers,
};
