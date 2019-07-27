var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/main.css', (req, res) => {
  res.sendFile(__dirname + '/main.css');
});

var tempNick = ["감자탕","맛탕","새우탕",
				"그라탕","갈비탕","백설탕"];

io.on('connection', socket => {
  console.log('User Connected: ', socket.id);
  var name = tempNick[Math.floor(Math.random()*6)];
  io.to(socket.id).emit('change name', name);

  socket.on('disconnect', () => {
      console.log('User Disconnected: ', socket.id);
  });

  socket.on('rename', (name,text) => {
	  console.log(socket.id + '(' + name + ') => ' + text);
      io.to(socket.id).emit('change name', text);
	  io.emit('receive message', name +'님이 '+text+'(으)로 닉네임을 변경했습니다.');
  });
  
  socket.on('send message', (name, text) => {
	  massage = name + ' : ' + text;
      console.log(socket.id + '(' + name + ') : ' + text);
      io.emit('receive message', massage);
  });
});

var port = 8080;

http.listen(port, function(){
  console.log('SERVER Run in port '+port+'.');
});