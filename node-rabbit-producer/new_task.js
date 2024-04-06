const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (connectionError, connection) {
	if (connectionError) {
		throw error;
	}

	connection.createChannel(function (channelCreationError, channel) {
		if (channelCreationError) {
			throw channelCreationError;
		}

		const queue = 'task_queue';
		const msg = process.argv.slice(2).join(' ') || 'Hello World!';

		channel.assertQueue('task_queue', { durable: true });
		channel.prefetch(1);

		channel.sendToQueue(queue, Buffer.from(msg), { persistent: true });
		console.log(` [x] Sent ${msg}`);

		setTimeout(function () {
			connection.close();
			process.exit(0);
		}, 500);
	});
});
