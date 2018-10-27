const mosca = require('mosca');
var settings = {port:1883} //Settings for mosca server - currently only port

//Create new mosca server and set tell it which port to use
var server = new mosca.Server(settings);

server.on('ready', () => {
    console.log("ready");
});