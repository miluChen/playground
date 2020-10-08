const Kafka = require("kafkajs").Kafka

run();

async function run() {
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["127.0.0.1:9092"]
        })

        const admin = kafka.admin();
        console.log("Connecting...")
        await admin.connect()
        console.log("Connected!")

        await admin.createTopics({
            "topics": [{
                "topic": "Users",
                // partition 1: A-M, partition 2: N-Z
                "numPartitions": 2
            }]
        })
        console.log("Created Successfully!")
        await admin.disconnect();
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        process.exit(0);
    }
}