const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	if(line > 0) {
		console.log('양수');
	} else if(line == 0) {
		console.log('0')
	} else {
		console.log('음수');
	}
	rl.close();
}).on("close", function() {
	process.exit();
});