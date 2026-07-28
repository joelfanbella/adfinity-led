(function () {
	"use strict";
	$(function ($) {
		var vH = $(window).height();
		var vW = $(window).width();
		$('.fullwidth').css('width', vW);
		$('.halfwidth').css('width', vW / 2);
		$('.fullheight').css('height', vH);
		$('.halfheight').css('height', vH / 2);
		$('ul.slimmenu').slimmenu({
			resizeWidth: '1200',
			collapserTitle: 'menu',
			easingEffect: 'easeInOutQuint',
			animSpeed: 'medium',
		});
	});
})();