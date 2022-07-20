"use strict";

function generateLottie(element, container) {
    if (document.querySelector(element) === null) return;

    LottieInteractivity.create({
        mode: 'scroll',
        player: element,
        container: container,
        actions: [
            {
                visibility: [0, 1],
                type: 'seek',
                speed: 2,
                frames: [0, 181],
            },
        ],
    });
}

generateLottie('#firstLottie', '.single-service-page__robot-1');
generateLottie('#firstLottie2', '.single-service-page__robot-2');
generateLottie('#firstLottie3', '.single-service-page__robot-3');

// Lazy Loading
const observer = lozad();
observer.observe();

// Splitting words/chars and show on scroll
var _window = window,
    Splitting = _window.Splitting,
    ScrollOut = _window.ScrollOut;
/*
* TODO Придумать как сплитить через класс/тег и через [data-splitting]
* */
Splitting({
    target: "[data-splitting]",
})

ScrollOut({
    targets: '.animate-title, .single-service-page h1, .single-service-page h2, .single-service-page h3, .black-text h1, .black-text h2, .black-text h3',
    onShown(el) {
        el.classList.add("animated");
    }
});

// Custom cursor
const cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: false,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    init: function() {
        this.setupEventListeners();
        this.animateDotOutline();
    },
    setupEventListeners: function() {
        const self = this;

        document.querySelector('.site-wrapper').addEventListener('mouseover', (e) => {
           if (e.target.classList.contains('custom-cursor-hover')) {
               self.cursorVisible = true;
               self.toggleCursorVisibility();
           } else {
               self.cursorVisible = false;
               self.toggleCursorVisibility();
           }
        });

        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });

        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });

        document.addEventListener('mousemove', function(e) {
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
    },

    animateDotOutline: function() {
        const self = this;
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function() {
        const self = this;

        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            self.$dot.classList.add('enlarge');
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$dot.classList.remove('enlarge');
        }
    },

    toggleCursorVisibility: function() {
        const self = this;
        self.$dot.style.opacity = self.cursorVisible ? 1 : 0;
    }
}
cursor.init();

// Show Cookies Alert
if (!window.localStorage.getItem('cookiesAccept')) {
    document.querySelector('.cookies-accept').classList.add('show');
}

document.querySelector('.cookies-accept .button').addEventListener('click', (e) => {
    window.localStorage.setItem('cookiesAccept', true);
    document.querySelector('.cookies-accept').classList.remove('show');
});

(function ($) {
    // Play video only if it's inside viewport
    $.fn.isInViewport = function() {
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();

        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    setInterval(function() {
        $('video').each(function(){
            let played = $(this).attr("played");

            if ($(this).isInViewport()) {
                if (played === false) {
                    $(this)[0].play();
                    $(this).attr("played", true);
                }
            } else {
                if (played === true) {
                    $(this)[0].pause();
                    $(this).attr("played", false);
                }
            }
        });
    }, 1000);

    // Reviews Slider
    const reviewsSlider = {
        navigation: $('.home-reviews__navigation'),
        items: $('.home-reviews__item'),
        jumpToReview: function (item) {
            $('.home-reviews__text-wrapper.active')
                .removeClass('active')
                .addClass('hide');
            $('.home-reviews__item.active')
                .removeClass('active');
            setTimeout( () => {
                $('.home-reviews__text-wrapper.hide')
                    .removeClass('hide');
            }, 200);

            $(`.home-reviews__item[data-review="${item}"], .home-reviews__text-wrapper[data-review="${item}"]`)
                .addClass('active');
        },
        fullReview: function (item = undefined, needToHide = false) {
            let btn = $(`.home-reviews__text-wrapper[data-review="${item}"]`)
                .find('.home-reviews__full');

            if (needToHide) {
                $('.home-reviews__text-full')
                    .slideUp('fast')
                    .prev()
                    .text('Показать весь отзыв')
                    .removeClass('active');

                return;
            }

            if (btn.hasClass('active')) {
                btn.text("Показать весь отзыв").removeClass('active');
                btn.next().slideUp('fast');

                return;
            }

            btn.text("Скрыть отзыв").addClass('active');
            btn.next().slideDown('fast');
        },
        init: function () {
            const self = this;

            this.items.on('click', function () {
                if (!$(this).hasClass('active')) {
                    let item = $(this).attr('data-review');
                    self.jumpToReview(item);
                    self.fullReview(undefined, true);
                }
            });

            this.navigation.on('click', '.next', function () {
                const curItem = $('.home-reviews__item.active');
                let item;

                if (!$(this).hasClass('disabled')) {
                    item = curItem.next().attr('data-review');

                    if (curItem.index() + 1 === self.items.length) {
                        $(this).addClass('disabled');
                    }

                    self.navigation.find('.prev.disabled').removeClass('disabled');
                    self.fullReview(undefined, true);
                    self.jumpToReview(item);
                }
            });

            this.navigation.on('click', '.prev', function () {
                const curItem = $('.home-reviews__item.active');
                let item;
                if (!$(this).hasClass('disabled')) {
                    item = curItem.prev().attr('data-review');

                    if (curItem.index() - 1 === 1) {
                        $(this).addClass('disabled');
                    }

                    self.navigation.find('.next.disabled').removeClass('disabled');
                    self.fullReview(undefined, true);
                    self.jumpToReview(item);
                }
            });

            $('body').on('click', '.home-reviews__full', function () {
                let item = $(this).closest('.home-reviews__text-wrapper').attr('data-review');
                console.log('click')
                self.fullReview(item)
            });
        }
    }
    reviewsSlider.init();

    // Service Form
    const form = {
        formTarget: $('.commercial-form'),
        radioClick: function (item, form = this.formTarget) {
            if (!item.hasClass('active')) {
                let id = item.attr('data-item');
                let lvl = parseInt(item.closest('.section-form__block').attr('data-level'));

                this.cleanForm(lvl, form);

                form.find(`.section-form__block[data-level="${lvl + 1}"][data-item="${id}"]`)
                    .slideDown('fast')
                    .addClass('active');

                this.setDescriptionInputsWidth();

                item.addClass('active');
            }
        },
        repetearClick: function (target) {
            const inputs = target.closest('.section-form__block').find('.section-form__inputs').first();
            let clone = inputs.clone();

            clone.find('input').val("");
            clone.find('.error').removeClass('error');
            clone.find('.form-error').remove();
            clone.append(`<div class="delete-clone">Удалить</div>`);

            target.parent().before(clone);
        },
        removeClone: function (target) {
            target.closest('.section-form__inputs').remove();
        },
        cleanForm: function (currentLvl = 0, form = this.formTarget) {
            const items = form.find(".section-form__block.active").filter((index, el) => {
                return parseInt($(el).attr("data-level")) > currentLvl;
            });

            form.find(`.section-form__block[data-level="${currentLvl}"]`)
                .find('.section-form__radio.active')
                .removeClass('active');

            items.each(function () {
                $(this).slideUp('fast').removeClass('active');
                $(this).find('.section-form__radio.active').removeClass('active')
            });
        },
        setDescriptionInputsWidth: function () {
            $('.section-form__radio-wrapper').each(function () {
                const w = $(this).find('.section-form__radio').outerWidth();
                $(this).find('.section-form__radio-description').css({
                    maxWidth: w
                });
            });
        },
        showError: function (input, errorText = 'Вы не заполнили поле') {
            input
                .addClass('error')
                .append(`<div class="form-error">${errorText}</div>`)
        },
        isFormErrors: function(form) {
            let formObject = this;
            let isErrors = false;
            let errorText, errorInput;

            form.find('.error').removeClass('error');
            form.find('.form-error').remove();

            form.find('.section-form__block.active').each(function () {
                // Check Inputs
                $(this).find('.section-form__input--required input').each(function () {
                    errorInput = $(this).closest('.section-form__input')
                    errorText = errorInput.attr('data-error');

                    if ($(this).val() === "" || !$(this).val()) {
                        formObject.showError(errorInput, errorText);

                        isErrors = true;
                    }
                    if ($(this).attr('type') === 'tel' && $(this).val().includes('_')) {
                        formObject.showError(errorInput, errorText);

                        isErrors = true;
                    }
                })
            });

            if (isErrors) {
                document.querySelector('.error').scrollIntoView({block: "center", behavior: "smooth"});
            }

            return isErrors;
        },
        collectData: function (form) {
            let formData = "";
            let title, radioText, inputName, inputValue

            form.find('.section-form__block.active').each(function () {
                title = $(this).find('.section-form__title').text();
                formData += `<h2>${title}</h2>`;

                if ($(this).find('.section-form__radio.active').length > 0) {
                    radioText = $(this).find('.section-form__radio.active').text();
                    formData += `<p>${radioText}</p><p>&nbsp;</p>`
                }

                if ($(this).find('.section-form__inputs').length > 0) {
                    $(this).find('.section-form__inputs input').each(function () {
                        if ($(this).val() && $(this).val() !== "") {
                            inputName = $(this).attr('placeholder');
                            inputValue = $(this).val();

                            formData += `<p><b>${inputName}</b> - ${inputValue}</p>`;
                        }
                    });

                    formData += `<p>&nbsp;</p>`;
                }
            });

            return formData;
        },
        submit: function (form) {
            const formObject = this;

            if (formObject.isFormErrors(form)) return false;

            const formData = this.collectData(form);

            console.log(formData);
            /*$.ajax({
                data: {
                    message: this.collectData(form)
                }
            })*/
        },
        init: function () {
            const formObject = this;

            this.formTarget.on('click', '.section-form__radio', function () {
                formObject.radioClick($(this), $(this).closest('form'));
            });

            this.formTarget.on('click', '.section-form__inputs-repeater', function () {
                formObject.repetearClick($(this));
            });

            this.formTarget.on('click', '.delete-clone', function () {
                formObject.removeClone($(this));
            });

            this.formTarget.on('submit', function (e) {
                e.preventDefault();

                formObject.submit($(this));
            });

            this.setDescriptionInputsWidth();
        },
    };

    form.init();

    $('body').on('mouseover', '.form-error', function () {
        $(this).fadeOut();
    });

    // Input mask for Phone field
    $('input[type="tel"]').inputmask('+7 (999) 999-99-99');

    $('.home-services__title, .category-page__name').each(function () {
        const brExp = /<br\s*\/?>/i;
        const content = $(this).html().split(brExp);
        $(this).html('');
        content.forEach((item, index) => {
            $(this).append(`<span class="item" style="--item-index: ${index}">${item}</span>`)
        });
    });

    $(window).on('scroll', function () {
        let pos;
        $('.line').each(function () {
            pos = $(this)[0].getBoundingClientRect().top;

            if (pos < 900) {
                $(this).css({
                    maxHeight: (pos - 900) * -1 * 0.7 < 423 ? (pos - 900) * -1 * 0.7 : 423
                })
            } else {
                $(this).css({
                    maxHeight: 0
                })
            }
        });
    });

    $('.popup-video, .popup-video__close').on('click', function () {
        $('.popup-video')
            .removeClass('active')
            .find('iframe').attr('src', '');
    });

    $('.popup-video__content').on('click', function (e) {
        e.stopPropagation();
    });

    let jsVideoClickItem = $('.js-video-click');

    jsVideoClickItem.on('mouseover', function () {
        $(this).find('video')[0].play();
    });

    jsVideoClickItem.on('mouseout', function () {
        $(this).find('video')[0].pause();
    });

    jsVideoClickItem.on('click', function (e) {
        e.preventDefault();

        let href = $(this).attr('href');

        $('.popup-video')
            .addClass('active')
            .find('iframe').attr('src', href);
    });

    $('.single-service-page, .black-text').each(function () {
       $(this).find('h1, h2, h3').addClass(['animate-title', 'text--enter']);
    });

    $(`.popup, .popup__close`).on('click', function () {
        $('.popup, .popup__content').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    $('.popup__content').on('click', function (e) {
        e.stopPropagation();
    });

    $('.js-show-popup').on('click', function (e) {
        e.preventDefault();

        const popup = $(this).attr('data-popup');

        $('body').addClass('no-scroll');
        $(`.popup, .popup__content[data-popup="${popup}"]`).addClass('active');
    });

    $('input[type="file"]').on('change', function() {
        if ($(this).val() !== '') {
            $(this).closest('label')
                .addClass('uploaded')
                .find('span')
                .text($(this)[0].files[0].name);
        }
    });
})(jQuery);