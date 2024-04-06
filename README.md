# RabbitMQ

## Instructions

1. Start RabbitMQ container

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.13-management
```

2. Start consumer process

```bash
cd node-rabbit-consumer
node consumer.js
```

3. Start producer process

```bash
cd node-rabbit-producer
node producer.js
```
