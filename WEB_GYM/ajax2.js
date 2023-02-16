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
