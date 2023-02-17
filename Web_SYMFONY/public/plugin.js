jQuery.fn.aumentar = function() {
   $("body").click(function(){
   $("#bienvenida").animate({fontSize: '+=62px'}, 5000);
   setTimeout(function(){
   $("#bienvenida").animate({fontSize: '-=62px'}, 3000);
   }, 3000);
   });
   };