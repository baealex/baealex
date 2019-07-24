var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var regex_pattern
app.get('/',function(req, res){
  res.sendFile(__dirname + '/client.html');
});

var count=1;
io.on('connection', function(socket){
  console.log('user connected: ', socket.id);
  var name = "user" + count++;
  io.to(socket.id).emit('change name',name);

  socket.on('disconnect', function(){
    console.log('user disconnected: ', socket.id);
  });

  socket.on('rename', function(name,text){
	  console.log(socket.id + ' : ' + name + ' to ' + text);
      io.to(socket.id).emit('change name',text);
	  io.emit('receive message', name + ' 님이 ' + text + ' (으)로 닉변했습니다!');
  });
  
  socket.on('send message', function(name,text){
    var msg = name + ' : ' + text;
    console.log(msg);
    io.emit('receive message', msg);
  });
});

http.listen(8080, function(){
  console.log('server on!');
});
