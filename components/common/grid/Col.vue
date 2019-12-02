<template>
  <div :class="['col', offsetsClasses, colsClasses, ordersClasses]">
    <slot />
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    offsets: {
      type: Array,
      default: () => []
    },
    cols: {
      type: Array,
      default: () => []
    },
    orders: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    grid: { xl: 48, l: 36, m: 24, s: 24, xs: 12 },
    offsetsClasses: '',
    colsClasses: '',
    ordersClasses: ''
  }),

  methods: {
    checkProps() {
      const vue = this
      let pastValue, i = 0, j = 0

      _.forEach(vue.grid, function(value) {
        if (vue.offsets[i] === undefined) {
          vue.offsets[i] = vue.offsets[i - 1] === undefined ? 0 : (vue.offsets[i - 1] / pastValue) * value
        }
        if (vue.cols[i] === undefined) {
          vue.cols[i] = vue.cols[i - 1] === undefined ? 0 : (vue.cols[i - 1] / pastValue) * value
        }
        if (vue.orders[i] === undefined) {
          vue.orders[i] = vue.orders[i - 1] === undefined ? 0 : (vue.orders[i - 1] / pastValue) * value
        }

        pastValue = value
        i++
      })
      _.forEach(vue.grid, function() {
        vue.offsets[j] = Math.floor(vue.offsets[j])
        vue.cols[j] = Math.floor(vue.cols[j])
        vue.orders[j] = Math.floor(vue.orders[j])
        j++
      })
    },
    setClasses() {
      const vue = this
      let i = 0

      _.forEach(vue.grid, function(columns, infix) {
        vue.offsetsClasses += vue.offsets[i] ? ' offset-' + infix + '-' + vue.offsets[i] : ''
        vue.colsClasses += vue.cols[i] ? ' col-' + infix + '-' + vue.cols[i] : ''
        vue.ordersClasses += vue.orders[i] ? ' order-' + infix + '-' + vue.orders[i] : ''
        i++
      })
    }
  },

  created() {
    this.checkProps()
    this.setClasses()
  }
}
</script>
