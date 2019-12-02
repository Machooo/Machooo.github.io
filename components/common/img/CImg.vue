<template>
  <div
    class="common-img"
    v-intersection-observer="{ once: true, rootMargin: '100%' }"
    @exception="onException"
    @show="onShow"
  >
    <template v-if="loaded">
      <img v-show="isDesktop" :src="img" :alt="[img ? alt : '']" />
      <img v-show="isMobile" :src="imgMobile" :alt="[imgMobile ? alt : '']" />
    </template>
  </div>
</template>

<script>
import resize from '~/mixins/resize'

/**
 * Проверяет что переданный файл — это изображение (.jpg, .jpeg, .png, .svg).
 * Передавать файлы формата .webp запрещено - он загрузится авотматически.
 *
 * @param {string|null} value Имя файла с расширением.
 *
 * @return {boolean}
 */
function imgValidator(value) {
  let pointPosition, extension

  if (typeof value !== 'string' || value === '') {
    return true
  }

  pointPosition = value.lastIndexOf('.')
  if (pointPosition === -1 || pointPosition === value.length) {
    return false
  }
  extension = value.substring(pointPosition + 1)
  return ['jpg', 'jpeg', 'png', 'svg'].indexOf(extension) !== -1
}

export default {
  mixins: [resize],

  props: {
    alt: {
      type: String
    },
    src: {
      type: [String, Boolean],
      default: false,
      validator: function(value) {
        return imgValidator(value)
      }
    },
    srcMobile: {
      type: [String, Boolean],
      default: false,
      validator: function(value) {
        return imgValidator(value)
      }
    },
    webp: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    loaded: false,
    img: undefined,
    imgMobile: undefined,
    WebPSupport: undefined
  }),

  watch: {
    loaded() {
      // Вместо init() проверем поддержку браузером формата WebP.
      this.checkWebPSupport()
    },
    isDesktop() {
      this.init()
    },
    isMobile() {
      this.init()
    },
    WebPSupport() {
      this.init()
    }
  },

  methods: {
    checkWebPSupport() {
      if (this.webp) {
        this.$store.dispatch('webp/isSupported')
          .then(() => {
            this.WebPSupport = true
          })
          .catch(() => {
            this.WebPSupport = false
          })
      } else {
        this.WebPSupport = false
      }
    },
    /**
     * ВАЖНО!!!
     * Всегда когда браузер поддерживает формат WebP будет загружен именно он.
     * Переданные файлы в параметрах компонента (src и/или srcMobile) должный иметь .webp аналог,
     * кроме случая если @props webp=false.
     */
    init() {
      if (!this.loaded) {
        return
      }

      let src

      if (this.isDesktop) {
        src = this.src
      }
      if (this.isMobile) {
        src = this.srcMobile
      }

      if (src) {
        if (this.webp && this.WebPSupport) {
          src = src.substring(0, src.lastIndexOf('.')) + '.webp'
        }
        this.setImg(src)
      }
    },
    /**
     * Изображение не будет загружено пока не будет установлен атрибут src="..." Здесь, собственно, это и происходит.
     * Чтобы лишний раз (например, событие resize) не загружать изображение проверятся изменился ли адрес файла с прошлого раза.
     */
    setImg(src) {
      if (this.isDesktop) {
        if (this.img !== src) {
          this.img = src
        }
      }
      if (this.isMobile) {
        if (this.imgMobile !== src) {
          this.imgMobile = src
        }
      }
    },
    // Изображение будет загружено если попадет в поле видимости или при ошибке IntersectionObserver.
    onShow() {
      this.loaded = true
    },
    onException() {
      this.loaded = true
    }
  }
}
</script>
