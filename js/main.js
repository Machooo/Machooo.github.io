"use strict";
(function ($) {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 20,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.auto-slider__navi--next',
            prevEl: '.auto-slider__navi--prev',
        },
    });

    $('.rules-block__faq-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle('slow');
    });

    $('.header__language-active').on('click', function () {
        $(this).toggleClass('active');
        $('.header__language-dropdown').toggleClass('active');
    });

    // PHONE INPUT MASK
    $('input[type="tel"]').inputmask('+7 (999) 999-99-99');
})(jQuery);