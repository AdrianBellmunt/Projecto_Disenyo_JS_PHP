
// <!--.load-->

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

// <!--show y hide-->

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



// <!--widget tabs-->
$( function() {
  $( "#tabs" ).tabs();
} );


 // <!--efectos fotos(plugin)-->

 jQuery.fn.efectofoto = function() {
  this.each(function(){
     elem = $(this);
     elem.fadeOut();
  });   
  return this;
}; 

jQuery.fn.efectofoto2 = function() {
  this.each(function(){
     elem = $(this);
     elem.fadeIn();
  });   
  return this;
}; 

 
jQuery.fn.mostrar = function() {
  this.each(function(){
     elem = $(this);
     elem.css("display", "block");
  });   
  return this;
}; 

jQuery.fn.desaparece = function() {
    $("#propiedades").hide();
  return this;
}; 

$(document).ready(function(){
  $("#hide").click(function(){
    $("#propiedades").desaparece();
  });
  $("#botonhuevo").click(function(){
      $("#propiedades").show();
    });
});



$(document).ready(function() {
  $("#huevo").mouseenter((function () {
      $("#huevo").efectofoto(2000);
      
  }));

  $("#huevo").mouseleave(function(){				
    $("#huevo").efectofoto2(2000);		
  })});

  // <!--informacion ropa-->

  $(document).ready(function() {
    $('#show').click(mostrarFichero);
    });
  
    $(document).ready(function() {
      $('#hide').click(function () {
        $("#contenedor").hide();
      });
      });


      $(document).ready(function() {
        $('#show2').click(mostrarFichero2);
        });
      
        $(document).ready(function() {
          $('#hide2').click(function () {
            $("#contenedor2").hide();
          });
          });
    

  function mostrarFichero() {
    $.ajax({
        url: './sudadera1.txt',
        type: 'GET',
    })
    .done(function (data) {
        $("#contenedor").html(data);
    })

    .fail(function () {
        $("#contenedor").html("Not found.");
    })
}

function mostrarFichero2() {
  $.ajax({
      url: './sudadera1.txt',
      type: 'GET',
  })
  .done(function (data) {
      $("#contenedor2").html(data);
  })

  .fail(function () {
      $("#contenedor2").html("Not found.");
  })
}


  // <!--Calculadoras-->
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