const http = require('http');
const fs = require('fs');
const path = require('path');
const io = require('socket.io');

let clientHTML = fs.readFileSync(path.join(__dirname, 'index.html'));

let webServer = http.createServer((req, res) => {
	if(req.url == '/') {
		res.statusCode = 200;
		res.write(clientHTML);
		res.end();
	}
	else {
		res.statusCode = 404;
		res.end();
	}
}).listen(8080);

let wsServer = io(webServer);
wsServer.on('connect', socket => {
	socket.on('hello_my_name_is' , data => {
		console.log(data, 'is connected');

		setInterval(() => {
			let data = socket.oldData || {x:0, y:Math.floor(Math.random()*300)};
			data.x += 1;
			data.y += Math.floor(Math.random()*30 - 15);
			data.y = data.y < 0 ? 0 : (data.y > 300 ? 300 : data.y);

			socket.emit('graph_data', data);
			socket.oldData = data;
		}, 50);
	});

	socket.on('ok_nice_to_meet_you', data => {
		console.log("visit user!");
	});

	socket.emit('hi', socket.id);
});
