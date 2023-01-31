$(document).ready(function() {
    $("#botoncalcular").click(function(event) {
        $("#caja").load('calculadoraIMC.html');
    });
});


function calcularIMC() {

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var imc = peso / (altura*altura);
    alert("Su IMC es: "+ imc.toFixed(2));   
}