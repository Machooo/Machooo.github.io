$(document).ready(function() {
    $('.fancybox').fancybox();

    var wow = new WOW({ // wow animate
        offset: 150,
        mobile: false
    });

    wow.init();


    $('.portfolio__slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: false,
        thumbs: true,
        thumbsPrerendered: true
    });

	var owl = $('.reviews__slider .owl-carousel').owlCarousel({
		items: 2,
		margin: 30,
		loop: true,
		nav: true,
		dots: false
    });

	owl.on('changed.owl.carousel', function (e) {
		var current = e.item.index;
        var index = $(e.target).find(".owl-item").eq(current).find('.item').attr('data-count');
        $('.reviews__slider .counter span').text(index);
	});


    $('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
});
