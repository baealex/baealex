var socket = io();

socket.on('receive message', function(n, m) {
	var tagP = document.createElement('p');
	if(n == $('#name').val()) {
		tagP.className = 'myMessage';
	}
	var msg = n + ' : ' + m;
	tagP.appendChild(document.createTextNode(msg))
	document.getElementById('chatLog').appendChild(tagP);
	document.getElementById('chatLog').scrollTop = document.getElementById('chatLog').scrollHeight;
});

socket.on('change name', function(name) {
	$('#name').val(name);
});

function chat() {
	socket.emit('send message', $('#name').val(), $('#message').val());
	$('#message').val('');
	$('#message').focus();
	e.preventDefault();
}

function rename() {
	socket.emit('rename', $('#name').val(), $('#message').val());
	$('#message').val('');
	$('#message').focus();
	e.preventDefault();
}

function checkEnter() {
	if(event.keyCode == 13) {
		chat();
		$('#message').val('');
	}
}
