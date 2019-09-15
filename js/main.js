(function($){
	"use strict";

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


	var imagesPreview = function(input, placeToInsertImagePreview) {
		if (input.files) {
			var filesAmount = input.files.length;
			for (var i = 0; i < filesAmount; i++) {
				var reader = new FileReader();
				reader.onload = function(event) {
					$(placeToInsertImagePreview).append(`<div class="preview" data-id="" style="background-image: url('${event.target.result}');"></div>`)
				}
				reader.readAsDataURL(input.files[i]);
			}
		}
	};

	$('#gallery-photo-add').on('change', function() {
		imagesPreview(this, 'div.gallery');
	});

	$(".map svg path, .map .hover").hover(
		function() {
			$(".map .hover.active, .map svg path.active").removeClass('active');
			var hover = $(this).attr('data-hover');
			$(".map .hover[data-hover='"+hover+"'], .map svg path[data-hover='"+hover+"']").addClass('active');
		},
		function() {
			$(".map .hover.active, .map svg path.active").removeClass('active');
		}
	);

	$('.slick').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: $('.offer-screen__slider .next-proj'),
		prevArrow: false,
		asNavFor: '.slick-images'
	});

	$('.slick-images').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: false,
		prevArrow: false,
		asNavFor: '.slick'
	});

	var $status = $('.offer-screen__slider .number span');

	$('.slick').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(`0${i}`);
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

	$('.portfolio__carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: false,
		asNavFor: '.portfolio__slider',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	$('.portfolio__item .img').on('click', function () {
		$(this).closest('.portfolio__item').find('.img.active').removeClass('active');
		$(this).addClass('active');
		var img = $(this).attr('data-img');
		$('.portfolio__item .main-img.active').removeClass('active');
		$('.portfolio__item .main-img[data-img="'+img+'"]').addClass('active');
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