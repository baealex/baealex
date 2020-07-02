const redis = require('redis');
const client = redis.createClient();
const express = require('express');
const bodyParser = require(`body-parser`);

let app = express();

app.use(bodyParser.json({limit: `500mb`}));

app.get('/', (req, res) => {
    client.set('name', 'Jino Bae');
    res.send(client.get('name'));
});

app.listen(3030, () => {
    console.log('http server listen on :3030');
});