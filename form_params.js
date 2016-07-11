var http = require('http'),
    fs = require('fs'),
    parser = require('./params_parse.js'),
    render = require('./render_view.js');
var p = parser.parse,r = render.render;
http.createServer(function(req,res){
  fs.readFile("./form.html",function(err,html){
    if (req.url.indexOf("favicon.ico")>0){return;}

    var html_string = html.toString();
    var params = p(req);
    res.write(r(html_string,params));
    //CLOSE THE RESPONSE !IMPORTANT
    res.end();

  })
}).listen(3000);
