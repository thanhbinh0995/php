$(document).ready(function() {
	$('.test').on('click', function(event) {
		event.preventDefault();
		alert('heh');
		// var body = $(this).closest('body');
		// body.setAttribute('style', 'background-color: red;');
		// body.toggleClass('red').toggleClass('yellow');
	});
});