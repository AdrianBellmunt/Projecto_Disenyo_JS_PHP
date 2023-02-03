var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}
function sacardatos(datos, idDiv){
if(XMLHttpRequestObject) {
var objeto = document.getElementById(idDiv);
XMLHttpRequestObject.open("GET", datos);
XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 &&
XMLHttpRequestObject.status == 200) {
objeto.innerHTML = XMLHttpRequestObject.responseText;
}
}
XMLHttpRequestObject.send(null);
}
}

$(document).ready(function(){
    $("#show").click(function(){
        $("#contenedor").show();
      });
  });

  $(document).ready(function(){
    $("#show2").click(function(){
        $("#contenedor2").show();
      });
  });

  $(document).ready(function(){
    $("#show").click(function(){
        $("#contenedor").show();
      });
  });

  $(document).ready(function(){
    $("#show3").click(function(){
        $("#contenedor3").show();
      });
  });

  $(document).ready(function(){
    $("#show").click(function(){
        $("#contenedor").show();
      });
  });

  $(document).ready(function(){
    $("#show4").click(function(){
        $("#contenedor4").show();
      });
  });

