var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.0.27')

client.on('connect', () => {
    client.subscribe('topic')
})
client.on('message', (topic, message) => {
    context = message.toString();
    console.log(context)
})