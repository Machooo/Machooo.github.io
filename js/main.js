(function(){

	$('.header .burger, .header__menu a').click(function(){
		$('.header .burger, .header__menu').toggleClass('active');
		if( typeof  $(this).attr('href') !== 'undefined' ) {
			console.log(1);
	        $('html, body').animate({
	            scrollTop: $($(this).attr('href')).offset().top}, 1500);
	        return false;
		}
	});

	var gallery_slider = jQuery('.gallery__slider .owl-carousel').owlCarousel({
		items: 3,
		margin: 40,
		nav: true,
		loop: true,
		responsive: {
			0 : {
				items: 1
			},
			535 : {
				items: 2
			},
			960 : {
				items: 3
			}
		}
	});

	gallery_slider.on('changed.owl.carousel', function (e) {
		var current = e.item.index;
        var index = $(e.target).find(".owl-item").eq(current).find('.item').attr('data-count');
        $('.gallery__slider .slider-counter span').text(index);
	});


	var products_slider = jQuery('.products__slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		autoHeight: true
	});

	products_slider.on('changed.owl.carousel', function (e) {
		var current = e.item.index;
        var index = $(e.target).find(".owl-item").eq(current).find('.item').attr('data-count');
        $('.products__slider .slider-counter span').text(index);
	});



	jQuery('img.svg').each(function(){
	    var $img = jQuery(this),
	    	imgID = $img.attr('id'),
	    	imgClass = $img.attr('class'),
	    	imgURL = $img.attr('src'),
			imgWidth = $img.attr('width'),
			imgHeight = $img.attr('height');
	    jQuery.get(imgURL, function(data) {
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
