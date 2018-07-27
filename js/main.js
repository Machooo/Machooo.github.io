$(document).ready(function(){
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

	jQuery('.colors-slider .owl-carousel').owlCarousel({
		items: 3,
		margin: 20,
		loop: true
	});

	jQuery('.video').click(function(){
		jQuery(this).addClass('active');
	});

	jQuery('.colors .selector').click(function(){
		var id = jQuery(this).attr('data-chair');
		jQuery('.colors .selected img, .colors .selector').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.colors #' + id).addClass('active');
	});

	jQuery('.mask .checkbox').click(function(){
		var text = jQuery(this).text();
		jQuery('.mask .checkbox').removeClass('active');
		jQuery(this).addClass('active');
	});

	jQuery('.burger, .burger-menu a').on('click', function(){
		jQuery('.burger, .burger-menu').toggleClass('active');
	});

	jQuery('.burger-menu a').on('click', function(){
        var el = $(this).attr('href');
        jQuery('html, body').animate({
            scrollTop: jQuery(el).offset().top}, 2000);
        return false; 
	});

});