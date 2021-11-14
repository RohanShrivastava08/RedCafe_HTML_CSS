// CUSTOM SLIDER JAVASCRIPT FILE
// function provides a cycle interval display of each image within the slider
$(document).ready(function(){
	$('#slider').cycle({ 
    fx:     'fade',  // fade image
    speed:  'slow',  // at slow speed
    timeout: 4000,   // at time interval of 4 seconds
    next:   '#next', // next interactivity of slider
    prev:   '#prev'  // prev interactivity of slider
	});
});