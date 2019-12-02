import Vue from 'vue'
import 'intersection-observer'

/**
 * Директива позволяет следить за тем входит ли элемент на странице в поле зрения.
 *
 * Основные применения:
 * - загрузка изображений или другого контента по мере прокрутки страницы;
 * - бесконечный скролл, где контент подгружается по мере того как страница прокручивается вниз;
 * - состевление отчета о видимости рекламы;
 * - принятие решения, запускать ли какой-то процесс или анимацию в зависимости от того, увидит пользователь результат или нет.
 *
 * @param {boolean}     once       Требуется ли наблюдателю работать сработать только до первого выхода из поле зрения или всегда.
 *                                 По умолчанию работет на каждое появление в поле зрения.
 * @param {HTMLElement} root       Элемент который используется как область просмотра для проверики видимости целевого элемента.
 *                                 По умолчанию используется область видимости браузера.
 * @param {String}      rootMargin Отступы вокруг root. Например, чтобы запустить загрузить картинку заранее.
 * @param {Array}       threshold  Массив чисел, чтобы указать, с какой % видимости блока должен сработать наблюдатель.
 *                                 Например, триггер на каждые 25 процентов, которые входят в поле зрения: [0, 0.25, 0.5, 0.75, 1]
 *
 * @event exception Исключение в случае, если IntersectionObserver не поддерживается браузером.
 *                  Например, в случае реализации LazyLoad стоит показать все картинки.
 * @event show      Блок входит в поле зрения. Может передавать значение threshold.
 * @event hide      Блок вышел из поля зрения.
 */
Vue.directive('intersection-observer', {
  inserted: function(el, binding, vNode) {
    let once, root, rootMargin, threshold
    let visible = false

    function init(params) {
      if (typeof params === 'object') {
        once = typeof params.once !== 'undefined' ? !!params.once : false
        root = (
          typeof params.root !== 'undefined' &&
          params.root !== null &&
          (
            typeof HTMLElement === 'object'
              ? params.root instanceof HTMLElement
              : (
                typeof params.root === 'object' &&
                params.root.nodeType === 1 &&
                typeof params.root.nodeName === 'string'
              )
          )
        ) ? params.root : null
        rootMargin = params.rootMargin !== 'undefined' ? params.rootMargin : false
        threshold = (
          typeof params.threshold !== 'undefined' &&
          Array.isArray(params.threshold) &&
          params.threshold.length
        ) ? params.threshold : [0]
      }
    }

    function createObserver() {
      let options = {
        root: root,
        threshold: threshold
      }
      if (!!rootMargin) {
        options = Object.assign(options, { rootMargin: rootMargin })
      }

      let observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          if (visible) {
            emit(vNode, 'hide')
            if (once) {
              observer.unobserve(el)
            }
          }
        } else {
          emit(vNode, 'show', entry.intersectionRatio)
        }

        visible = entry.isIntersecting
        return
      })
    }

    function emit(vNode, name, data) {
      let handlers, handler

      handlers = vNode.data.on
      if (handlers && handlers.hasOwnProperty(name)) {
        handler = handlers[name]
        const fn = handler.fns || handler.fn
        if (typeof fn === 'function') {
          fn(data)
        }
      }
    }

    if ('IntersectionObserver' in window) {
      init(binding.value)
      createObserver()
    } else {
      emit(vNode, 'exception')
    }
  }
})
