var http = require('http');

var mannager = function(type, resp){
  console.log("i am a another param");
  resp.end("Hello World");
};
var server = http.createServer(mannager);

server.listen(8080);
