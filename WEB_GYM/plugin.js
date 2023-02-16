 // <!--efectos fotos(plugin)-->


 jQuery.fn.hacerrojo = function() {
    this.each(function(){
       elem = $(this);
       elem.css( "color", "red");
    });   
    return this;
 }; 
