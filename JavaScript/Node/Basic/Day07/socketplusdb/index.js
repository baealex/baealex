var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'baealex',
	password: '1234',
	port: 3306,
	database: 'testcase'
});

connection.connect();

insertChat = (name, chat) => {
	connection.query('INSERT INTO CHAT(USER, CONTENT) VALUES(\''+name+'\',\''+chat+'\');', (err, rows, filds) => {
		if(err)
			console.log(err);
	});
};

getChatHistory = (num) => {
	connection.query('SELECT PK, USER, CONTENT FROM CHAT ORDER BY PK DESC LIMIT ' + num + ';', (err, rows, filds)=> {
		if(!err) {
			return rows;
		}
		else
			console.log(err);
	});
};

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/client/index.html');
});

app.get('/main.css', (req, res) => {
	res.sendFile(__dirname + '/client/main.css');
});

app.get('/main.js', (req,res) => {
	res.sendFile(__dirname + '/client/main.js');
});

var tempNick = ['감자탕', '맛탕', '새우탕', '그라탕', '갈비탕', '백설탕', '쌍화탕', '탕탕탕'];

io.on('connection', socket => {
	console.log('USER CONNECTED : ', socket.id);
	var name = tempNick[Math.floor(Math.random()*tempNick.length)];
	io.to(socket.id).emit('change name', name);
   
    connection.query('SELECT PK, USER, CONTENT FROM CHAT ORDER BY PK DESC LIMIT 10;', (err, rows, filds)=> {
		if(!err)
			for(let i=9; i>=0; i--) {
				io.to(socket.id).emit('receive message', rows[i].USER, rows[i].CONTENT);
			}
		else
			console.log(err);
	});


	socket.on('disconnect', () => {
		console.log('USER DISCONNECT : ', socket.id);
	});

	socket.on('rename', (name, text) => {
		if(!text) {
			notice = '이름 변경을 시도했으나 불가능한 이름입니다.';
			console.log(socket.id + '(' + name + ') => fail');
		} else {
			io.to(socket.id).emit('change name', text);
			notice = name + '님이 ' + text + '(으)로 이름을 변경했습니다.';
			console.log(socket.id + '(' + name + ') => ' + text);
		}
		io.emit('receive message', '시스템', notice);
		insertChat('시스템', notice);
	});

	socket.on('send message', (name, text) => {
		console.log(socket.id + '(' + name + ') : ' + text);
		io.emit('receive message', name, text);
		insertChat(name, text);
	});
});

http.listen(3000, () => {
	console.log('SERVER RUN IN PORT 3000');
});
