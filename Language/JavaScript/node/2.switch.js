const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	switch(line) {
		case '200':
			console.log('웰치스');
			break;
		case '300':
			console.log('코코팜');
			break;
		case '500':
			console.log('아이스티');
			break;
		default:
			console.log(line);
			break;
	}
	rl.close();
}).on("close", function() {
	process.exit();
});