function render(html,params){
  var vars = html.match(/[^\{\}]+(?=\})/g);
  var name = "";
  for (var i = 0; i < vars.length; i++) {
    //Ejecutar como codigo js
    //para obtener el valor de la variable
    var value = eval(vars[i]);
    //Reemplazar llaves con valor de contenido
    html = html.replace("{"+vars[i]+"}",params[vars[i]]);
  }
  return html
}
module.exports.render = render;
