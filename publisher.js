const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://192.168.0.27');

client.on('connect', () => {
    setInterval(() => {
        client.publish('topic', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);
});