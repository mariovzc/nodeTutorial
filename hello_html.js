var http = require('http'),
    fs = require('fs');

fs.readFile("./index.html",function(err,data){
  http.createServer(function(req,res){
    //HEADER
    res.writeHead(200, {'Content-Type': 'application/json'});
    //BODY
    res.write(JSON.stringify({nombre: "mario", username: "mario"}));
    //CLOSE THE RESPONSE !IMPORTANT
    res.end();
  }).listen(8080);


})
