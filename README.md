# RabbitMQ

## Instructions

1. Start RabbitMQ container

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.13-management
```

2. Start logs consumers

```bash
cd node-rabbit-consumer
node recive_logs.js
```

3. Start logs producer

```bash
cd node-rabbit-producer
node emit_log.js
```
