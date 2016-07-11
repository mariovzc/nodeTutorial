var http = require('http'),
    fs = require('fs');

http.createServer(function(req,res){
  fs.readFile("./form.html",function(err,html){
    if (req.url.indexOf("favicon.ico")>0){return;}

    var params_arr = [], params=[];
    if (req.url.indexOf("?")>0){
      var url_data = req.url.split("?");
      params_arr = url_data[1].split("&");
      //[name=mario]
    }
    for (var i = 0; i < params_arr.length; i++) {
      var param = params_arr[i];
      //name = mario
      var data = param.split("=");
      //[name, mario]
      params[data[0]]= data[1];
    }
    var html_string = html.toString();

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
