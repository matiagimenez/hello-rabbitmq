const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (connectionError, connection) {
	if (connectionError) {
		throw error;
	}

	connection.createChannel(function (channelCreationError, channel) {
		if (channelCreationError) {
			throw channelCreationError;
		}

		const exchange = 'logs';

		const msg = process.argv.slice(2).join(' ') || 'Hello World!';

		channel.assertExchange(exchange, 'fanout', {
			durable: false,
		});

		channel.publish(exchange, '', Buffer.from(msg));
		console.log(` [x] Sent ${msg}`);

		setTimeout(function () {
			connection.close();
			process.exit(0);
		}, 500);
	});
});
