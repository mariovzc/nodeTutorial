var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get("/",function(req,res){
  res.render("index", {hello: "Hello from the appjs"});
});
app.get("/second",function(req,res){
  res.render("second",{title:"I am the second Page", header: "you are in the second module", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
});
app.listen(3000);
