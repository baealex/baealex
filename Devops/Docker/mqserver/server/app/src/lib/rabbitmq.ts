import amqp = require('amqplib');

class RabbitMQ {
    private url: string;
    private queueName: string;
    private option?: {};

    public channel: any;
    public connect: any;
    public queue: any;

    constructor(url: string, queueName: string, options?: {}) {
        this.url = url;
        this.queueName = queueName;
        this.option = options;

        // public
        this.channel = undefined;
        this.queue = undefined;
    }

    public async setup() {
        const connect = await amqp.connect(this.url);
        const channel = await connect.createChannel();
        this.connect = connect;
        this.channel = channel;
    }

    public async assertQueue() {
        const queue = await this.channel.assertQueue(this.queueName, {durable: true});
        this.queue = queue;
    }

    public async sendToQueue(message: string) {
        const sending = await this.channel.sendToQueue(this.queueName, this.encode(message), {persistent: true,});
        await this.channel.close();
        await this.connect.close();
        return sending;
    }

    public async recvFromQueue() {
        const message = await this.channel.get(this.queueName, {});
        if (message) {
            this.channel.ack(message);
            await this.channel.close();
            await this.connect.close();
            return message.content.toString();
        }
        else {
            await this.channel.close();
            await this.connect.close();
            return null;
        }
    }

    private encode(doc: any) {
        return Buffer.from(JSON.stringify(doc));
    }
}

export { RabbitMQ };