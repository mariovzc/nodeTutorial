var express = require('express');
var app = express();
var $ = require('jquery');
window.$ = $;
require('bootstrap');

app.set('view engine', 'jade');

app.get("/",function(req,res){
  res.render("index");
});
app.listen(3000);
