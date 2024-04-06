const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (connectionError, connection) {
	if (connectionError) {
		throw connectionError;
	}

	connection.createChannel(function (channelCreationError, channel) {
		if (channelCreationError) {
			throw channelCreationError;
		}

		const queue = 'hello';

		channel.assertQueue(queue, {
			durable: false,
		});

		console.log(
			` [*] Waiting for messages in ${queue}. To exit press CTRL+C`
		);

		channel.consume(
			queue,
			function (msg) {
				console.log(` [x] Received ${msg.content.toString()}`);
			},
			{
				noAck: true,
			}
		);
	});
});
