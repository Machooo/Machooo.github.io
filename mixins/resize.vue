<script>
/**
 * Использовать с осторожностью!
 * Например, блок с правилом v-if|show="isDesktop|isMobile" не будет сгенерирован nuxt'ом,
 * соответственно такой блок не отобразиться пока не загрузятся все скрипты.
 */
export default {
  data: () => ({
    isDesktop: undefined,
    isMobile: undefined
  }),

  methods: {
    setDeviceType() {
      if (process.browser) {
        this.isDesktop = window.innerWidth >= 912
        this.isMobile = window.innerWidth < 912
        window.addEventListener('resize', () => {
          setTimeout(() => {
            this.isDesktop = window.innerWidth >= 912
            this.isMobile = window.innerWidth < 912
          }, 0)
        })
      }
    }
  },

  mounted() {
    this.setDeviceType()
  }
}
</script>
