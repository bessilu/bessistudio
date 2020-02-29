$(function() {
  $.scrollify({
		section:".slide",
    scrollbars:false,
  });
});


$( ".back" ).click(function() {
  $.scrollify.move("#uno");
});

$( ".sect2" ).click(function() {
  $.scrollify.move("#due");
});

$( ".sect3" ).click(function() {
  $.scrollify.move("#tre");
});

$( ".sect4" ).click(function() {
  $.scrollify.move("#quattro");
});






