const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
	if(str.length % 2 == 1) {
		return odd;
	} else {
		return even;
	}
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('안녕세상아!'));