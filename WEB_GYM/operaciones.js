$(document).ready(function() {
    $("#botoncalcular").click(function(event) {
        $("#caja").load('CalculadoraMassa.html');
    });
});

$(document).ready(function() {
    $("#botoncalcular2").click(function(event) {
        $("#caja2").load('calculadoraIMC.html');
    });
});

$(document).ready(function() {
    $("#botoncalcular3").click(function(event) {
        $("#caja3").load('CalculadoraMantener.html');
    });
});


$(document).ready(function(){
    $("#hide").click(function(){
      $("#contenedor").hide();
    });
    $("#show").click(function(){
        $("#contenedor").show();
      });
  });


$(document).ready(function(){
    $("#hide2").click(function(){
      $("#contenedor2").hide();
    });
    $("#show2").click(function(){
        $("#contenedor2").show();
      });
  });

  $(document).ready(function(){
    $("#hide3").click(function(){
      $("#contenedor3").hide();
    });
    $("#show3").click(function(){
        $("#contenedor3").show();
      });
  });


  $(document).ready(function(){
    $("#hide4").click(function(){
      $("#contenedor4").hide();
    });
    $("#show4").click(function(){
        $("#contenedor4").show();
      });
  });





function calcularIMC() {

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var imc = peso / (altura*altura);
    alert("Su IMC es: "+ imc.toFixed(2));   
}

function AumentarPeso() {

    var pesoA = document.getElementById("pesoA").value;

    var aumentarpeso = (pesoA * 22) * 1.5 + 300;

    alert("Calorias necessarias para aumentar masa muscular: "+ aumentarpeso +" kcal");
    
}

function MantenerCalorias() {

    var pesoM = document.getElementById("pesoM").value;
   
    var mantenerpeso = (pesoM * 22);
    alert("Calorias necessarias para mantener peso: "+ mantenerpeso +" kcal");
}