function t_onReady(func) {
    if (document.readyState != 'loading') {
        func();
    } else {
        document.addEventListener('DOMContentLoaded', func);
    }
}

function t_onFuncLoad(funcName, okFunc, time) {
    if (typeof window[funcName] === 'function') {
        okFunc();
    } else {
        setTimeout(function () {
            t_onFuncLoad(funcName, okFunc, time);
        }, (time || 100));
    }
}

function t_throttle(fn, threshhold, scope) {
    return function () {
        fn.apply(scope || this, arguments);
    };
}

window.dataLayer = window.dataLayer || [];

(function () {
    if ((/bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(navigator.userAgent)) === false && typeof (sessionStorage) != 'undefined' && sessionStorage.getItem('visited') !== 'y' && document.visibilityState) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}';
        document.getElementsByTagName('head')[0].appendChild(style);

        function t_setvisRecs() {
            var alr = document.querySelectorAll('.t-records');
            Array.prototype.forEach.call(alr, function (el) {
                el.classList.add("t-records_animated");
            });
            setTimeout(function () {
                Array.prototype.forEach.call(alr, function (el) {
                    el.classList.add("t-records_visible");
                });
                sessionStorage.setItem("visited", "y");
            }, 400);
        }

        document.addEventListener('DOMContentLoaded', t_setvisRecs);
    }
})();

window.addEventListener('load', function () {
    t_onFuncLoad('t228_setWidth', function () {
        t228_setWidth('461645341');
    });
});

window.addEventListener('resize', t_throttle(function () {
    t_onFuncLoad('t228_setWidth', function () {
        t228_setWidth('461645341');
    });
    t_onFuncLoad('t_menu__setBGcolor', function () {
        t_menu__setBGcolor('461645341', '.t228');
    });
}));

t_onReady(function () {
    t_onFuncLoad('t_menu__highlightActiveLinks', function () {
        t_menu__highlightActiveLinks('.t228__list_item a');
    });
    t_onFuncLoad('t_menu__findAnchorLinks', function () {
        t_menu__findAnchorLinks('461645341', '.t228__list_item a');
    });
    t_onFuncLoad('t228__init', function () {
        t228__init('461645341');
    });
    t_onFuncLoad('t_menu__setBGcolor', function () {
        t_menu__setBGcolor('461645341', '.t228');
    });
    t_onFuncLoad('t228_setWidth', function () {
        t228_setWidth('461645341');
    });
    t_onFuncLoad('t_menu__changeBgOpacity', function () {
        t_menu__changeBgOpacity('461645341', '.t228');
        window.addEventListener('scroll', t_throttle(function () {
            t_menu__changeBgOpacity('461645341', '.t228');
        }));
    });
    t_onFuncLoad('t_menu__createMobileMenu', function () {
        t_menu__createMobileMenu('461645341', '.t228');
    });
});

t_onReady(function () {
    setTimeout(function () {
        t_onFuncLoad('t_menusub_init', function () {
            t_menusub_init('461645341');
        });
    }, 500);
});

t_onReady(function () {
    t_onFuncLoad('t280_showMenu', function () {
        t280_showMenu('461645342');
    });
    t_onFuncLoad('t280_changeSize', function () {
        t280_changeSize('461645342');
    });
    t_onFuncLoad('t280_highlight', function () {
        t280_highlight();
    });
});
t_onFuncLoad('t280_changeSize', function () {
    window.addEventListener('resize', t_throttle(function () {
        t280_changeSize('461645342');
    }));
});
t_onReady(function () {
    t_onFuncLoad('t280_changeBgOpacityMenu', function () {
        t280_changeBgOpacityMenu('461645342');
        window.addEventListener('scroll', t_throttle(function () {
            t280_changeBgOpacityMenu('461645342');
        }));
    });
});

t_onReady(function () {
    setTimeout(function () {
        t_onFuncLoad('t_menusub_init', function () {
            t_menusub_init('461645342');
        });
    }, 500);
});

t_onReady(function () {
    var rec = document.querySelector('#rec461645344');
    if (!rec) return;
    rec.setAttribute('data-animationappear', 'off');
    rec.style.opacity = '1';
});

t_onReady(function () {
    var rec = document.querySelector('#rec461645345');
    if (!rec) return;
    rec.setAttribute('data-animationappear', 'off');
    rec.style.opacity = '1';
});

t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645347');
    });
});

t_onReady(function () {
    t_onFuncLoad('t708_initPopup', function () {
        t708_initPopup('461645348');
    });
});

t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645354');
    });
});

t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645361');
    });
});

t_onReady(function () {
    t_onFuncLoad('t843_init', function () {
        t843_init('461645362');
    });
});

t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645367');
    });
});

t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645372');
    });
});

if (typeof jQuery !== 'undefined') {
    $('#rec461645373').find('.js-form-proccess').on('tildaform:aftererror', function (e) {
        e.preventDefault();
        t_onFuncLoad('t712_fixcontentheight', function () {
            t712_fixcontentheight('461645373');
        });
    });
} else {
    var formBlock = document.querySelector('#rec461645373 .js-form-proccess');
    if (formBlock) {
        formBlock.addEventListener('tildaform:aftererror', function (e) {
            e.preventDefault();
            t_onFuncLoad('t712_fixcontentheight', function () {
                t712_fixcontentheight('461645373');
            });
        });
    }
}

function t_animateInputs(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec) return;
    var inputsGroup = rec.querySelectorAll(
        '.t-input-group:not(.t-input-group_da):not(.t-input-group_uw):not(.t-input-group_ri):not(.t-input-group_rg) .t-input-block, .t-datepicker__wrapper'
    );
    Array.prototype.forEach.call(inputsGroup, function (input) {
        input.style.position = 'relative';
        input.style.overflow = 'hidden';
    });
    var inputsPhone = rec.querySelectorAll('.t-input-group.t-input-group_ph');
    Array.prototype.forEach.call(inputsPhone, function (input) {
        input.style.position = 'relative';
    });
    var inputs = rec.querySelectorAll('.t-input:not(.t-inputquantity):not(.t-input-phonemask__wrap):not(.t-input-phonemask)');
    Array.prototype.forEach.call(inputs, function (input) {
        input.classList.add('t-input_pvis');
        var inputPlaceholder = input.getAttribute('placeholder');
        if (inputPlaceholder) {
            input.insertAdjacentHTML('afterend', '<div class="t-input__vis-ph">' + inputPlaceholder + '</div>');
        }
        input.setAttribute('placeholder', '');
        input.addEventListener('blur', function () {
            var inputValue = input.value;
            if (inputValue) {
                input.classList.add('t-input_has-content');
            } else {
                input.classList.remove('t-input_has-content');
            }
        });
    });
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        var textareas = rec.querySelectorAll('textarea:not(.t-input_bbonly)');
        Array.prototype.forEach.call(textareas, function (textarea) {
            textarea.style.paddingLeft = '17px';
        });
        var textareasBBonly = rec.querySelectorAll('textarea.t-input_bbonly');
        Array.prototype.forEach.call(textareasBBonly, function (textarea) {
            textarea.style.textIndent = '-3px';
        });
    }
}

t_onReady(function () {
    t_onFuncLoad('t_animateInputs', function () {
        t_animateInputs('461645373');
    });
});

t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645375');
    });
});

t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645376');
    });
});

t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645381');
    });
});

window.addEventListener('load', function () {
    t_onFuncLoad('t228_setWidth', function () {
        t228_setWidth('472101864');
    });
});
window.addEventListener('resize', t_throttle(function () {
    t_onFuncLoad('t228_setWidth', function () {
        t228_setWidth('472101864');
    });
    t_onFuncLoad('t_menu__setBGcolor', function () {
        t_menu__setBGcolor('472101864', '.t228');
    });
}));
t_onReady(function () {
    t_onFuncLoad('t_menu__highlightActiveLinks', function () {
        t_menu__highlightActiveLinks('.t228__list_item a');
    });
    t_onFuncLoad('t_menu__findAnchorLinks', function () {
        t_menu__findAnchorLinks('472101864', '.t228__list_item a');
    });
    t_onFuncLoad('t228__init', function () {
        t228__init('472101864');
    });
    t_onFuncLoad('t_menu__setBGcolor', function () {
        t_menu__setBGcolor('472101864', '.t228');
    });
    t_onFuncLoad('t228_setWidth', function () {
        t228_setWidth('472101864');
    });
    t_onFuncLoad('t_menu__changeBgOpacity', function () {
        t_menu__changeBgOpacity('472101864', '.t228');
        window.addEventListener('scroll', t_throttle(function () {
            t_menu__changeBgOpacity('472101864', '.t228');
        }));
    });
    t_onFuncLoad('t_menu__createMobileMenu', function () {
        t_menu__createMobileMenu('472101864', '.t228');
    });
});



(function ($) {
    $('body').on('submit', 'form', function (e) {
        e.preventDefault();

        var form = $(this);
        var isErrors = false;

        form.find('.error-text, .success').remove();
        form.find('.js-error-control-box').removeClass('js-error-control-box');

        form.find('input').each(function () {
            if ($(this).val() === "") {
                $(this)
                    .closest('.t-input-group')
                    .addClass('js-error-control-box')
                    .find('.t-input-error')
                    .text('这是必填栏');

                isErrors = true;
            }
        });

        if (!isErrors) {
            $.ajax({
                url: "./send.php",
                type: "POST",
                dataType: "html",
                data: form.serialize(),
                success: function (response) {
                    result = $.parseJSON(response);
                    console.log(result)
                    if (result.success) {
                        form.find('input, textarea').val("");
                        form.append('<div class="success">谢谢！ 您的信息发送成功</div>')
                    } else {
                        form.append('<div class="error-text">出了点问题，请稍后再试。</div>');
                    }
                },
                error: function (response) { // Данные не отправлены
                    $('#result_form').html('Ошибка. Данные не отправлены.');
                }
            });
        }
    });
})(jQuery);