var http = require('http'),
    fs = require('fs'),
    parser = require('./params_parse.js');
var p = parser.parse
http.createServer(function(req,res){
  fs.readFile("./form.html",function(err,html){
    if (req.url.indexOf("favicon.ico")>0){return;}

    var html_string = html.toString();
    var params = p(req);
    // expresion regultar para atrapar valores dentro de {}
    var vars = html_string.match(/[^\{\}]+(?=\})/g);
    var name = "Mario";
    for (var i = 0; i < vars.length; i++) {
      //Ejecutar como codigo js
      //para obtener el valor de la variable
      var value = eval(vars[i]);
      //Reemplazar llaves con valor de contenido
      html_string = html_string.replace("{"+vars[i]+"}",params[vars[i]]);
    }

    res.write(html_string);
    //CLOSE THE RESPONSE !IMPORTANT
    res.end();

  })
}).listen(3000);
