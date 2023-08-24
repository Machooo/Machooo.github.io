"use strict";

// Lazy loading plugin
const observer = lozad();
observer.observe();

(function ($) {
    Fancybox.bind("[data-fancybox]"); // everything clear here

    // Function which activate SwiperSlider only on mobile devices
    function initSwiper(swiperElement, settings, isTabs = false) {
        const breakpoint = window.matchMedia('(min-width: 960px)');
        let mySwiper;
        const breakpointChecker = function () {
            if ( breakpoint.matches === true ) {
                // clean up old instances and inline styles when available
                if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
            // else if a small viewport and single column layout needed
            } else if ( breakpoint.matches === false ) {
                // fire small viewport version of swiper
                return enableSwiper();
            }
        };
        const enableSwiper = function () {
            mySwiper = new Swiper(swiperElement, settings);

            if (isTabs) {
                mySwiper.on('slideChange', function (item) {
                    setTab(item.el.querySelector('.tabs-block__header-item[data-swiper-slide-index="' + item.realIndex + '"]'))
                });
            }
        };
        breakpoint.addEventListener("change", () => {
            breakpointChecker();
        });
        breakpointChecker();
    }

    $(window).on('load', function () {
        if (document.querySelector('.tabs-block .tabs-block__header') !== null) {
            document.querySelectorAll('.tabs-block .tabs-block__header').forEach(item => {
                initSwiper(item, {
                    loop: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    a11y: true,
                    keyboardControl: true,
                    grabCursor: true,
                }, true);
            });
        }

        if (document.querySelector('.blog-page__categories') !== null) {
            initSwiper('.blog-page__categories', {
                loop: false,
                freeMode: true,
                slidesPerView: 'auto',
                centeredSlides: false,
                a11y: true,
                keyboardControl: false,
                grabCursor: false,
                spaceBetween: 20,
            });
        }
    });
    // End

    // Homepage hero slider
    if ($('.hero-slider').length) {
        const swiper = new Swiper('.hero-slider .swiper', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            pagination: {
                el: '.hero-slider__pagination',
                clickable: true
            },
            loop: true,
            navigation: {
                nextEl: '.hero-slider__arrow--next',
                prevEl: '.hero-slider__arrow--prev',
            }
        });
    }

    function toggleHidden(button) {
        $(button).text($(button).data($(button).hasClass('active') ? 'text' : 'active-text'));
        $(button).closest('.container').find('.hidden').slideToggle('fast');
        $(button).toggleClass('active');
    }

    $('.benefits-screen__show-more, .reasons-screen__show .button').on('click', function () {
        toggleHidden($(this));
    });

    $('.home-cases__tab').on('click', function () {
        if ($(this).hasClass('active')) return;

        const tab = $(this).data('column');

        $(`.home-cases__tab.active, .home-cases__column.active`).removeClass('active');
        $(`.home-cases__tab[data-column="${tab}"], .home-cases__column[data-column="${tab}"]`).addClass('active');
    });

    // POPUP
    $('.show-popup').on('click', function () {
        const tab = $(this).data('popup');
        $(`.popup, .popup__content[data-popup="${tab}"]`).addClass('active');
    });

    $('.popup, .popup__close').on('click', function () {
        $('.popup').removeClass('active');
    });

    $('.popup__content').on('click', function (e) {
        e.stopPropagation();
    });

    // ANCHOR
    $('body').on('click', '.js-anchor', function (e) {
        e.preventDefault();
        $($(this).data('scroll') || $(this).attr('href'))[0].scrollIntoView({behavior: "smooth", block: "start"});
    });

    // TABS
    function setTab(elem) {
        if ($(elem).hasClass('active')) return;

        const tab = $(elem).data('tab');
        $(elem).closest('.js-tab-container').find('.active').removeClass('active');
        $(elem).closest('.js-tab-container').find('[data-tab="' + tab + '"]').addClass('active');
    }

    $('.js-tab').on('click', function () {
        setTab($(this));
    });

    // ACCORDION
    $('.js-accordion').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.js-accordion-content').slideToggle('slow');
    });

    // BUILD NAVIGATION IN BLOG POST
    // $.fn.inView = function(inViewType){
    //     var viewport = {};
    //     viewport.top = $(window).scrollTop();
    //     viewport.bottom = viewport.top + $(window).height();
    //     var bounds = {};
    //     bounds.top = this.offset().top;
    //     bounds.bottom = bounds.top + this.outerHeight();
    //     switch(inViewType){
    //         case 'bottomOnly':
    //             return ((bounds.bottom <= viewport.bottom) && (bounds.bottom >= viewport.top));
    //         case 'topOnly':
    //             return ((bounds.top <= viewport.bottom) && (bounds.top >= viewport.top));
    //         case 'both':
    //             return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));
    //         default:
    //             return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));
    //     }
    // };
    function buildNavigation() {
        const titles = [];

        $('.blog-detail-page__text h2').each(function (index) {
            $(this).attr('id', 'title-' + index);

            titles.push({
                id: "title-" + index,
                text: $(this).text()
            })
        })

        titles.length && titles.forEach(item => {
            $('.blog-detail-page__navigation-list').append(`
                <a 
                    href="#${item.id}" 
                    data-id="${item.id}" 
                    class="blog-detail-page__navigation-item js-anchor"
                >${item.text}</a>
            `)
        });
    }

    if ($('.blog-detail-page').length) {
        buildNavigation();

        // $(window).on('scroll', function () {
        //     $('.blog-detail-page__text h2').each(function (index) {
        //         if ($(this).inView('both')) {
        //             $(this).addClass('visible');
        //         } else {
        //             $(this).removeClass('visible');
        //         }
        //         const id = $('.blog-detail-page__text .visible').last().attr('id');
        //         console.log(id)
        //         if ($(
        //             `.blog-detail-page__navigation-item.active`).data('id') !== id
        //             || !$('.blog-detail-page__navigation-item.active').length
        //         ) {
        //             $(`.blog-detail-page__navigation-item.active`).removeClass('active');
        //             $(`.blog-detail-page__navigation-item[data-id="${id}"]`).addClass('active');
        //         }
        //     });
        // });
    }

    // LANGUAGE SELECTOR
    $('.header__language-current').on('click', function () {
        $('.header__language-list').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.header__language-list').on('click', 'a', function (e) {
        e.preventDefault();
        $('.header__language-current span').text($(this).find('span').text());
        $('.header__language-current img').attr('src', $(this).find('img').attr('src'));
        $('.header__language-list, .header__language-current').removeClass('active');

        if ($(this).hasClass('rtl')) {
            $('body').addClass('rtl');
        } else {
            $('body').removeClass('rtl');
        }
    });
})(jQuery);

// function which convert SVG <img> with .svg className to inline <svg>
const convertSvgToInline = () => {
    const images = document.querySelectorAll('img.svg');
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const src = img.getAttribute('src');
        if (src.toLowerCase().endsWith('.svg')) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', src, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const svgString = xhr.responseText;
                    const div = document.createElement('div');
                    div.innerHTML = svgString;
                    const svg = div.querySelector('svg');
                    if (svg) {
                        img.parentNode.replaceChild(svg, img);
                    }
                }
            };
            xhr.send();
        }
    }
}

convertSvgToInline();