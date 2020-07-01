// @None Types
const bodyParser = require(`body-parser`);

// @Types
import { Request, Response } from 'express';
import express = require('express');

import { RabbitMQ } from './lib/rabbitmq';

let app = express();
app.use(bodyParser.json({limit: `500mb`}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello!');
});

app.post('/msg/in/:id', async (req: Request, res: Response) => {
    const url = 'amqp://username:password@192.168.110.130:5672';
    const queueName = 'MQ_' + req.params.id;
    const rabbitMQ = new RabbitMQ(url, queueName);

    console.log('in :', req.body);

    await rabbitMQ.setup();
    await rabbitMQ.assertQueue();
    await rabbitMQ.sendToQueue(req.body);

    res.send(req.body);
});

app.get('/msg/out/:id', async (req: Request, res: Response) => {
    const url = 'amqp://username:password@192.168.110.130:5672';
    const queueName = 'MQ_' + req.params.id;
    const rabbitMQ = new RabbitMQ(url, queueName);

    await rabbitMQ.setup();
    await rabbitMQ.assertQueue();
    const message = await rabbitMQ.recvFromQueue();

    console.log('out :', message);

    res.send(message);
});

app.listen(3030, () => {
    console.log('http server listen on :3030');
});