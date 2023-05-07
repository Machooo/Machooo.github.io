"use strict";
(function ($) {
    // AUTO SLIDER
    if ($('.auto-slider__swiper').length) {
        const swiper = new Swiper('.auto-slider__swiper', {
            spaceBetween: 20,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.auto-slider__navi--next',
                prevEl: '.auto-slider__navi--prev',
            },
        });
    }

    if ($('.single-car__swiper').length) {
        const singleSwiper = new Swiper(".single-car__swiper-thumbs", {
            loop: false,
            spaceBetween: 12,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                1140: {
                    slidesPerView: 5
                },
            }
        });
        const singleThumbs = new Swiper(".single-car__swiper", {
            loop: true,
            spaceBetween: 12,
            slidesPerView: 1,
            navigation: {
                nextEl: ".single-car__navi-button--next",
                prevEl: ".single-car__navi-button--prev",
            },
            thumbs: {
                swiper: singleSwiper,
            },
        });
    }

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // POPUP
    $('.show-popup').on('click', function () {
        $('.popup').addClass('active');
    });

    $('.popup, .popup__close').on('click', function () {
        $('.popup').removeClass('active');
    });

    $('.popup__content').on('click', function (e) {
        e.stopPropagation();
    });

    // DATE PICKER
    const otherOptions = {
        autoHide: true,
        format: 'dd.mm.yyyy',
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    }

    let start = $('.input--start input').datepicker({
        startDate: new Date(),
        ...otherOptions
    });

    let end = $('.input--end input').datepicker({
        startDate: new Date($('.input--start input').val()),
        ...otherOptions
    });

    start.on('change', function () {
        const date = start.val().split('.');
        end.val("");
        end.datepicker('destroy');
        end = $('.input--end input').datepicker({
            startDate: new Date(`${date[1]}/${Number(date[0]) + 1}/${date[2]}`),
            ...otherOptions
        });

        if ($('.popup').hasClass('active')) {
            $('.popup__price').slideUp('fast');
        }
    });

    end.on('change', function () {
        if ($('.popup').hasClass('active')) {
            calculatePopupPrice();
        }
    });

    function calculatePopupPrice() {
        let start = $('.popup input[name="start"]').val();
        let end = $('.popup input[name="end"]').val();

        if (!start || !end) return;

        let days = convertDateToString(end) - convertDateToString(start);
        let price = Number($('.popup__price .item.day .value span').text().replaceAll(' ', ''));

        $('.popup__price .item.total .label span').text(days);
        $('.popup__price .item.total .value span').text(numberWithSpaces(days * price));
        $('.popup__price').slideDown('fast');
    }

    function convertDateToString(date) {
        const dateArray = date.split('.');
        return Number(`${dateArray[2]}${dateArray[1]}${dateArray[0]}`);
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    // ANCHOR
    $('.js-anchor').on('click', function () {
        $($(this).data('scroll'))[0].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    });

    // TABS
    $('.reviews-page__meta .tab').on('click', function () {
        if ($(this).hasClass('active')) return;

        const tab = $(this).data('tab');

        $('.reviews-page__list.active, .reviews-page__meta .tab.active').removeClass('active');

        $(this).addClass('active');
        $('.reviews-page__list[data-tab="'+ tab +'"]').addClass('active');
    });

    // SORTING
    $('.cars__sorting').on('click', function () {
        if ($(this).hasClass('asc')) {
            $(this).removeClass('asc');
            $(this).addClass('desc');
        } else {
            $(this).removeClass('desc');
            $(this).addClass('asc');
        }
    });

    // FILTERS START
    $('.auto-filters__clear').on('click', function () {
        const block = $(this).closest('.auto-filters__section');
        clearFilters(block);
    });

    $('.auto-filters__item').on('click', function () {
        const block = $(this).closest('.auto-filters__section');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');

            if (block.find('.active').length === 0) {
                clearFilters(block);
            }
        } else {
            $(this).addClass('active');
        }

        setFilters(block);
    })

    function clearFilters(block) {
        block.find('.auto-filters__clear, .auto-filters__selected').addClass('hidden');
        block.find('.active').removeClass('active');
    }

    function setFilters(block) {
        if (block.find('.active').length > 0) {
            block.find('.auto-filters__clear, .auto-filters__selected').removeClass('hidden');
            block.find('.auto-filters__selected span').text(block.find('.active').length);
        }
    }
    // FILTERS END

    // ACCORDION
    $('.rules-block__faq-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle('slow');
    });

    // LANG MENU
    $('.header__language-active').on('click', function () {
        $(this).toggleClass('active');
        $('.header__language-dropdown').toggleClass('active');
    });

    // PHONE INPUT MASK
    $('input[type="tel"]').inputmask('+7 (999) 999-99-99');
})(jQuery);