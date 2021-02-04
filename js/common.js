// func footer_bottom
footerOnBottom = function () {
	var vh = $('.footer').outerHeight(true);
	$('.main-wrap').css('padding-bottom', vh)
} 



$(document).ready(function () {



	$('.menu-toggle').click(function() {
		$('#mobile-menu').toggleClass('opening');
		$(this).toggleClass('open');
		$("#top-screen").toggleClass('mobile-pad');

	});


//  footer_bottom
footerOnBottom();

});



$(window).on('resize', function () {
	footerOnBottom();
});
