# RabbitMQ

## Instructions

1. Start RabbitMQ container

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.13-management
```

2. Start worker/s

```bash
cd node-rabbit-consumer
node worker.js
```

3. Start task producer

```bash
cd node-rabbit-producer
node new_task.js
```
