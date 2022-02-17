$(document).ready(function () {
	$('.red-form-btn').on('click', function (e) {
		e.preventDefault();
		
		$('.modal').fadeIn().show();
	});
	
	$('.modal-close-btn').on('click', function () {
		$('.modal').fadeOut().hide();
	});
	
	$('.slider-btn').on('click', function (e) {
		e.preventDefault();
		
		$('.modal').fadeIn().show();
	});
});