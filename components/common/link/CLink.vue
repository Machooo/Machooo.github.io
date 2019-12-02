<template>
  <component :is="tag" :href="to" :to="to" :target="target ? '_blank' : ''" @click.native="emitClick()">
    <slot />
  </component>
</template>

<script type="text/javascript">
  export default {
    props: {
      target: {
        type: Boolean,
        default: false
      },
      to: {
        type: String,
        default: ''
      }
    },

    data: () => ({
      isNuxt: true
    }),

    computed: {
      tag() {
        return this.target
          ? 'a'
          : this.isNuxt ? 'nuxt-link' : 'a'
      }
    },

    methods: {
      emitClick(event) {
        this.$emit('click', event)
        this.$root.$nuxt.$emit('link.route', this.to)
        window.navigator.vibrate(200);
      }
    },

    mounted() {
      this.$root.$nuxt.$on('link.is_nuxt', value => {
        this.isNuxt = value
      })
    }
  }
</script>
