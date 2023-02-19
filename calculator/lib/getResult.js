const getResult = (op, numArray) => {
	let result = null;
	switch (op) {
		case 'sum':
			result = numArray.reduce((acc, elem) => acc + elem);
			break;
		case 'sub':
			result = numArray.reduce((acc, elem) => acc - elem);
			break;

		case 'mult':
			result = numArray.reduce((acc, elem) => acc * elem);
			break;

		case 'div':
			result = numArray.reduce((acc, elem) => acc / elem);
			break;
		default:
			result = 'Unknown operation type';
			break;
	}
	return result;
};

module.exports = getResult;
