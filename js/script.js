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
	
	$('.services-btn').on('click', function (e) {
		e.preventDefault();
		
		$('.modal').fadeIn().show();
	});
	
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 0) {
			$('.to-top').fadeIn().show();
		} else {
			$('.to-top').fadeOut().hide();
		}
	});
	
	$('.to-top-inner').on('click', function (e) {
		e.preventDefault();
		$('body, html').animate({scrollTop: 0}, 700);
	});
});