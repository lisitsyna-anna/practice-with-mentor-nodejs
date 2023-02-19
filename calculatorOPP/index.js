const CalculatorClass = require('./CalculatorClass');
const { operation, numbers } = require('./fetchData');

// instance
// toInstanciate - создание инстанца
const calculator = new CalculatorClass(operation, numbers);

// console.log(calculator.getResult(operation, numbers));

console.log(calculator.init());
