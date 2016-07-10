var http = require('http'),
    fs = require('fs');

http.createServer(function(req,res){
  fs.readFile("./vars.html",function(err,html){
    var html_string = html.toString();

    // expresion regultar para atrapar valores dentro de {}
    var vars = html_string.match(/[^\{\}]+(?=\})/g);
    var name = "Mario";

    // variables ['name']
    for (var i = 0; i < vars.length; i++) {
      //Ejecutar como codigo js
      //para obtener el valor de la variable
      var value = eval(vars[i]);
      //Reemplazar llaves con valor de contenido
      html_string = html_string.replace("{"+vars[i]+"}",value);
    }
    res.write(html_string);
    //CLOSE THE RESPONSE !IMPORTANT
    res.end();

  })
}).listen(8080);
