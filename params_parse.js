function parse(req) {
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
  return params;
}
module.exports.parse = parse;
