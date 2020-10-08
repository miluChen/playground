# kafka

`docker stop zookeeper kafka`

`docker rm zookeeper kafka`

`docker run --name zookeeper  -p 2181:2181 -d zookeeper`

`docker run -p 9092:9092 --name kafka --network=host -e KAFKA_ZOOKEEPER_CONNECT=127.0.0.1:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka`
