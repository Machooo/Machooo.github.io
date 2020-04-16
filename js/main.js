(function ($) {
	"use strict";

	$('.faq-item__quest').on('click', function () {
		if ($(this).hasClass('faq-item__quest--active')) {
			$(this).removeClass('faq-item__quest--active');
			$(this).next().slideUp('slow');
		} else {
			$(this).closest('.faq-item-list').find('.faq-item__quest--active')
				.removeClass('faq-item__quest--active')
				.next().slideUp('slow');
			$(this).addClass('faq-item__quest--active');
			$(this).next().slideDown('slow');
		}
	});


	$('.progress__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: $('.photo-gallery__next'),
		prevArrow: $('.photo-gallery__prev'),
		dots: true
	});


	$('.show-popup').on('click', function (e) {
		e.preventDefault();
		var popup = $(this).attr('data-popup');
		$('body').addClass('no-scroll');
		$('.popup__content.active').removeClass('active');
		$('.popup, .popup__content--' + popup).addClass('active');
	});

	$('.popup, .popup__close').on('click', function (e) {
		$('.popup').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('.popup__content').on('click', function (e) {
		e.stopPropagation();
	});

	$('input[type="tel"]').inputmask('+7(999)999-99-99');

	////// конвертит img в svg ////////
	$('img.svg').each(function () {
		var $img = jQuery(this),
			imgID = $img.attr('id'),
			imgClass = $img.attr('class'),
			imgURL = $img.attr('src'),
			imgWidth = $img.attr('width'),
			imgHeight = $img.attr('height');

		$.get(imgURL, function (data) {
			var $svg = jQuery(data).find('svg');
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			if (typeof imgWidth !== 'undefined') {
				$svg = $svg.attr('width', imgWidth);
			}
			if (typeof imgHeight !== 'undefined') {
				$svg = $svg.attr('height', imgHeight);
			}
			$svg = $svg.removeAttr('xmlns:a');
			$img.replaceWith($svg);
		}, 'xml');
	});

})(jQuery);