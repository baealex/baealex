const http = require('http');
const fs = require('fs');
const path = require('path');

var htmls = {
    index: fs.readFileSync('./index.html'),
    photo: fs.readFileSync('./photo.html')
};

http.createServer((req, res) => {
    var route = req.method + " " + req.url;

    if(route == "GET /") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html; charset=utf-8");
        res.write(htmls.index);
        res.end();
    } else if(route == "GET /photo") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html; charset=utf-8");
        res.write(htmls.photo);
        res.end();
    } else {
        var fileName = path.join(__dirname, req.url);

        fs.readFile(fileName, (err, data) => {
            if(err) {
                res.statusCode = 404;
                res.end("Page Not Found");
            } else {
                res.write(data);
                res.end();
            }
        });
    }
}).listen(5555);

console.log("server-static HTTP server running in 5555");