const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (connectionError, connection) {
	if (connectionError) {
		throw connectionError;
	}

	connection.createChannel(function (channelCreationError, channel) {
		if (channelCreationError) {
			throw channelCreationError;
		}

		const exchange = 'logs';

		channel.assertExchange(exchange, 'fanout', {
			durable: false,
		});

		channel.assertQueue('', { exclusive: false }, (queueError, q) => {
			if (queueError) {
				throw queueError;
			}

			console.log(
				` [*] Waiting for messages in ${q.queue}. To exit press CTRL+C`
			);

			channel.bindQueue(q.queue, exchange, '');

			channel.consume(
				q.queue,
				function (msg) {
					if (msg.content) {
						console.log(` [x]  ${msg.content.toString()}`);
					}
				},
				{
					noAck: true,
				}
			);
		});
	});
});
