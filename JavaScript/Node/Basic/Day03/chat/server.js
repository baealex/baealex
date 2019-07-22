const net = require('net');

let sockets = [];
function broadcast(message) {
    sockets.forEach(socket => {
        socket.write(message);
    });
}

let server = net.createServer(socket => {
    sockets.push(socket);
    let ip = socket.address().address;
    broadcast(`${ip} 님이 입장하셨습니다.`);

    socket.on('data', data => {
        let packet = data.toString().split('|');
        let name = packet[0] || '아무개';
        let message = packet[1] && packet[1].trim() || '';
        if(message != '') {
            broadcast(`${name}> ${message}`);
        }
    });

    socket.on('close', () => {
        let index = sockets.indexOf(socket);
        sockets.splice(index, 1);
        broadcast(`${ip}님이 퇴장하셨습니다.`);
    });

    socket.on('error', e => {
        console.log(e);
    });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server started at prot ${port}`);
});