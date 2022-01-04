function isSame(x, y) {
	return Math.abs(x - y) < Number.EPSILON;
}

if (0.1 + 0.2 == 0.3) {
	console.log('0.1 + 0.2 == 0.3 is same.')
}

if (isSame(0.1 + 0.2, 0.3)) {
	console.log('isSame(0.1 + 0.2, 0.3) is same.')
}