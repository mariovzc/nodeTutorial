var express = require('express');
var app = express();

app.set('view engine', 'jade');

// Routes
app.get("/",function(req,res){
  res.render("index");
});
app.get("/:nombre",function(req,res) {
  console.log(req.params.nombre);
  res.render("form");
});
app.post("/",function(req,res){
  res.render("form");
});
app.listen(3000);
