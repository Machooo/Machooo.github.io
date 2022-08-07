(function ($){
    "use strict";
    $('.js-anchor').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 500);
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        $(this).find('.error-text').remove();
        $(this).find('.error').removeClass('error');

        let isErrors = false;
        $(this).find('.required').each(function () {
            if ($(this).find('input').val() === "") {
                $(this).addClass('error');
                let errorText = $(this).attr('data-error');

                $(this).append(`<div class="error-text">${errorText}</div>`);
                isErrors = true;
            }
        });

        console.log($(this).find('.registration__acceptance input'))

        if (!$(this).find('.registration__acceptance input').is(':checked')) {
            $(this).find('.registration__acceptance')
                .addClass('error')
                .append('<div class="error-text">Вы должны принять условия пользовательского соглашения</div>');
        }
    })

    $('.header__burger').on('click', function() {
        $('.header__burger, .header__menu').toggleClass('active');
    });
})(jQuery);