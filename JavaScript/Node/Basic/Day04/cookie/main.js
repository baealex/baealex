const express = require('express');
app = express();

app.get('/set', (req, res) => {
    res.setHeader('Set-Cookie', 'key1=val1');
    res.setHeader('Set-Cookie', ['key2=val2', 'key3=val3']);
    res.cookie('key', 'val4');

    /*
    Set-Cookie: key1=val1
    Set-Cookie: key2=val2
    Set-Cookie: key3=val3
    Set-Cookie: key4=val4
    */

    res.send("웹 브라우저님 이 쿠기들 좀 만들어 주세요.");
});

app.get('/get', (req, res) => {
    res.send("웹 브라우저가 보낸 쿠키들: " + req.headers.cookie);
});

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/get2', (req,res) => {
    res.send("웹 브라우저가 보낸 쿠키: " + req.cookies.key1);
});

app.listen(8000);
console.log("Server on port 8000.");