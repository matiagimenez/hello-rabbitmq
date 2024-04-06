<img src="https://github.com/matiasgimenezdev/hello-rabbitmq/assets/117539520/c387594c-6389-4b37-a21f-4b3533067b43" width="80">

# RabbitMQ
**RabbitMQ** is a message-queueing software also known as a message broker or queue manager. Simply said, it is software where queues are defined, to which applications connect in order to transfer a message or messages. 

A **message broker** acts as a middleman for various services. They can be used to reduce loads and delivery times of applications by delegating tasks that would normally take up a lot of time or resources to a third party that has no other job.

A **message** can include any kind of information. It could, for example, have information about a process or task that should start on another application (which could even be on another server), or it could be just a simple text message. The queue-manager software stores the messages until a receiving application connects and takes a message off the queue. The receiving application then processes the message.

<img src="https://github.com/matiasgimenezdev/hello-rabbitmq/assets/117539520/45a270d5-b516-4863-b5fa-e23b0a0ff92c" width="850">

Messages are not published directly to a queue. Instead, the producer sends messages to an **exchange**. An **exchange** is responsible for routing the messages to different queues with the help of bindings and routing keys. A **binding** is a link between a queue and an exchange.

There are different types of exchanges. Firstly, the **direct** exchange routes the message to queues whose routing key exactly matches the routing key of the message. For example, if the queue is bound to the exchange with the binding key "pdfprocess," a message published to the exchange with a routing key "pdfprocess" is routed to that queue. Secondly, the **fanout** exchange distributes messages to all queues bound to it. Lastly, the **topic** exchange performs wildcard matching between the routing key and the routing pattern specified in the binding.

<img src="https://github.com/matiasgimenezdev/hello-rabbitmq/assets/117539520/559830ca-2ce3-4c05-b80b-bfd7dafecc71" width="850">


## Instructions

1. Start RabbitMQ container

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.13-management
```

2. Start logs consumers

```bash
cd node-rabbit-consumer
node receive_logs.js
```

3. Start logs producer

```bash
cd node-rabbit-producer
node emit_log.js
```
