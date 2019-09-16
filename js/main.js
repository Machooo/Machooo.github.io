(function($){
	"use strict";

	$('.video__preview').on('click', function () {
		$(this).parent().addClass('active');
	});

	$('.faq__item').on('click', function () {
		$('.faq__item.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.programms__category .item').on('click', function () {
		var cat = $(this).attr('data-cat');

		$('.programms__category .item.active').removeClass('active');
		$(this).addClass('active');

		$(".programms .category.active").removeClass('active');
		$(this).closest(".programms").find(".category[data-cat='"+cat+"']").addClass('active');

	});

	$('.programms__week .item').on('click', function () {
		var cat = $(this).attr('data-week');

		$('.programms__week .item.active').removeClass('active');
		$(this).addClass('active');

		$(".programms .week.active").removeClass('active');
		$(this).closest(".programms").find(".week[data-week='"+cat+"']").addClass('active');

	});

	$('.programms__weekday .item').on('click', function () {
		var cat = $(this).attr('data-day');

		$('.programms__weekday .item.active').removeClass('active');
		$(this).addClass('active');

		$(".programms .menu.active").removeClass('active');
		$(this).closest(".programms").find(".menu[data-day='"+cat+"']").addClass('active');

	});

	$(".js-range-slider").ionRangeSlider();

	function cloneWars() {
		$(".slick-cloned").each(function () {
			$(this).find('a[data-fancybox]').removeAttr("data-fancybox");
			$(this).removeAttr("data-fancybox");
		})
	}

	$(window).on('load', function () {
		cloneWars();
	});

	$('#gallery-photo-add').on('change', function() {
		imagesPreview(this, 'div.gallery');
	});

	$('.photo-gallery__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		margin: 30,
		nextArrow: $('.photo-gallery__next'),
		prevArrow: $('.photo-gallery__prev'),
		dots: true
	});

  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 30,
    nextArrow: $('.reviews__next'),
    prevArrow: $('.reviews__prev'),
    dots: true
  });


	$('.show-popup').on('click', function(e){
		e.preventDefault();
		var popup = $(this).attr('data-popup');
		$('body').addClass('no-scroll');
		$('.popup__content.active').removeClass('active');
		$('.popup, .popup__content--' + popup).addClass('active');
	});

	$('.popup, .popup__close').on('click', function(e){
		$('.popup').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('.popup__content').on('click', function(e){
		e.stopPropagation();
	});

	$('input[type="tel"]').inputmask('+7(999)999-99-99');

	////// конвертит img в svg ////////
	$('img.svg').each(function(){
	    var $img = jQuery(this),
	    	imgID = $img.attr('id'),
	    	imgClass = $img.attr('class'),
	    	imgURL = $img.attr('src'),
			imgWidth = $img.attr('width'),
			imgHeight = $img.attr('height');

	    $.get(imgURL, function(data) {
	        var $svg = jQuery(data).find('svg');
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }
			if(typeof imgWidth !== 'undefined') {
				$svg = $svg.attr('width', imgWidth);
			}
			if(typeof imgHeight !== 'undefined') {
				$svg = $svg.attr('height', imgHeight);
			}
	        $svg = $svg.removeAttr('xmlns:a');
	        $img.replaceWith($svg);
	    }, 'xml');
	});

})(jQuery);