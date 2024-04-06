const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (connectionError, connection) {
	if (connectionError) {
		throw error;
	}

	connection.createChannel(function (channelCreationError, channel) {
		if (channelCreationError) {
			throw channelCreationError;
		}

		const queue = 'hello';
		const msg = 'Hello world! I am a producer';

		channel.assertQueue(queue, {
			durable: false,
		});

		channel.sendToQueue(queue, Buffer.from(msg));
		console.log(` [x] Sent ${msg}`);

		setTimeout(function () {
			connection.close();
			process.exit(0);
		}, 500);
	});
});
