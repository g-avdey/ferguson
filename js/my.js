$(document).ready(function(){
	var touch = $('.menu_btn');
	var menu = $('.list');

	$(touch).on('click',function(e){
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if (wid > 480 && menu.is('hidden')){
			menu.removeAttr('style')
		}
	});
});