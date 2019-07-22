const http = require('http');

http.createServer((req, res) => {
    console.log(123);

    res.end('Baejino Dotcom');
}).listen(5555);