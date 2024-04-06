const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (connectionError, connection) {
	if (connectionError) {
		throw connectionError;
	}

	connection.createChannel(function (channelCreationError, channel) {
		if (channelCreationError) {
			throw channelCreationError;
		}

		const queue = 'task_queue';

		channel.assertQueue('task_queue', { durable: true });

		console.log(
			` [*] Waiting for messages in ${queue}. To exit press CTRL+C`
		);

		channel.consume(
			queue,
			function (msg) {
				const secs = msg.content.toString().split('.').length - 1;

				console.log(` [x] Received ${msg.content.toString()}`);

				setTimeout(function () {
					console.log(' [x] Done');
					channel.ack(msg);
				}, secs * 1000);
			},
			{
				noAck: false,
			}
		);
	});
});
