var express = require('express');
var server = express();
var port = process.env.PORT || 3001;
var path = require('path');

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Routing
server.use(express.static(path.join(__dirname, 'node_modules')));
server.use(express.static(path.join(__dirname, 'app')));

server.get('/', function(request, response) {
    response.sendFile(__dirname + "/index.html");
});