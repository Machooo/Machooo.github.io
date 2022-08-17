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

t_onReady(function () {
    setTimeout(function () {
        t_onFuncLoad('t_menusub_init', function () {
            t_menusub_init('472101864');
        });
    }, 500);
});
t_onReady(function () {
    t_onFuncLoad('t280_showMenu', function () {
        t280_showMenu('472101904');
    });
    t_onFuncLoad('t280_changeSize', function () {
        t280_changeSize('472101904');
    });
    t_onFuncLoad('t280_highlight', function () {
        t280_highlight();
    });
});
t_onFuncLoad('t280_changeSize', function () {
    window.addEventListener('resize', t_throttle(function () {
        t280_changeSize('472101904');
    }));
});
t_onReady(function () {
    t_onFuncLoad('t280_changeBgOpacityMenu', function () {
        t280_changeBgOpacityMenu('472101904');
        window.addEventListener('scroll', t_throttle(function () {
            t280_changeBgOpacityMenu('472101904');
        }));
    });
});
t_onReady(function () {
    setTimeout(function () {
        t_onFuncLoad('t_menusub_init', function () {
            t_menusub_init('472101904');
        });
    }, 500);
});
t_onReady(function () {
    t_onFuncLoad('t708_initPopup', function () {
        t708_initPopup('461644984');
    });
});
t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461644985');
    });
});t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461644989');
    });
});
t_onReady(function () {
    var zeroFormsOnLoad = function () {
        t_onFuncLoad('t_zeroForms__init', function () {
            var recid = '461644993';
            var elemid = '1570460021447';
            var formElems = {
                "0": {
                    "lid": "1531306243545",
                    "ls": "10",
                    "loff": "",
                    "li_type": "nm",
                    "li_ph": "您的姓名",
                    "li_req": "y",
                    "li_nm": "Name"
                },
                "1": {
                    "lid": "1570460083783",
                    "ls": "20",
                    "loff": "",
                    "li_type": "ph",
                    "li_name": "phone",
                    "li_ph": "联系方式",
                    "li_req": "y",
                    "li_nm": "phone"
                },
                "2": {
                    "lid": "1531306540094",
                    "ls": "30",
                    "loff": "",
                    "li_type": "in",
                    "li_ph": "您孩子的年龄",
                    "li_nm": "Input"
                },
                "3": {
                    "lid": "1653729314028",
                    "ls": "40",
                    "loff": "",
                    "li_type": "in",
                    "li_ph": "感兴趣的课程",
                    "li_req": "y",
                    "li_nm": "Input_2"
                }
            };
            t_zeroForms__init(recid, elemid, formElems);
        });
    };
    var zeroFormsJS = 'js/tilda-zero-forms-1.0.min.js';
    if (document.querySelector("script[src^='" + zeroFormsJS + "']")) {
        zeroFormsOnLoad();
    } else {
        var script = document.createElement('script');
        script.src = zeroFormsJS;
        script.async = true;
        script.onload = zeroFormsOnLoad();
        script.onerror = function () {
            console.log('Error init form in zeroblock.');
        };
        document.head.appendChild(script);
    }
});
t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461644993');
    });
});
t_onReady(function () {
    t_onFuncLoad('t843_init', function () {
        t843_init('461644996');
    });
});
t_onReady(function () {
    t_onFuncLoad('t853_init', function () {
        t853_init('461644997');
    });
});

function t853_init(recid) {
    setTimeout(function () {
        t_onFuncLoad('t853_updateLazyLoad', function () {
            t853_updateLazyLoad(recid);
        });
    }, 500);
}

function t853_updateLazyLoad(recid) {
    var rec = document.querySelector('#rec' + recid);
    if (!rec) return;
    var scrollContainer = rec.querySelector('.t853__container_mobile-flex');
    var currentMode = document.querySelector('.t-records').getAttribute('data-tilda-mode');
    if (scrollContainer && currentMode !== 'edit' && currentMode !== 'preview') {
        scrollContainer.addEventListener(
            'scroll',
            t_throttle(function () {
                if (
                    window.lazy === 'y' ||
                    document.querySelector('#allrecords').getAttribute('data-tilda-lazy') === 'yes'
                ) {
                    t_onFuncLoad('t_lazyload_update', function () {
                        t_lazyload_update();
                    });
                }
            }, 500)
        );
    }
}
t_onReady(function () {
    t_onFuncLoad('t396_init', function () {
        t396_init('461645005');
    });
});
if (!window.mainTracker) {
    window.mainTracker = 'tilda';
}
setTimeout(function () {
    (function (d, w, k, o, g) {
        var n = d.getElementsByTagName(o)[0], s = d.createElement(o), f = function () {
            n.parentNode.insertBefore(s, n);
        };
        s.type = "text/javascript";
        s.async = true;
        s.key = k;
        s.id = "tildastatscript";
        s.src = g;
        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else {
            f();
        }
    })(document, window, '39bc86f8d86a8f1ec7506291fd107ccc', 'script', 'js/tilda-stat-1.0.min.js');
}, 2000);



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