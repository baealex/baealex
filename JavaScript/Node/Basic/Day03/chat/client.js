const net = require('net');

console.log('이름을 입력하세요 : ');
process.stdin.once('data', data => {
    let name = data.toString().replace('\n', '');

    let socket = net.connect(5000, 'localhost', () => {
        socket.on('data', data => {
            console.log(data.toString());
        });

        process.stdin.on('data', data => {
            let message = data.toString().replace('\n', '');
            let packet = `${name}|${message}`;
            socket.write(packet);
        });
    });
});