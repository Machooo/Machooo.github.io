// These components are registered globally, and can be used
// anywhere within our application without importing them.

import Vue from 'vue'

// Only for components which using on each page
export default [
  Vue.component('Col', require('~/components/common/grid/Col.vue').default),
  Vue.component('CImg', require('~/components/common/img/CImg.vue').default),
  Vue.component('CLink', require('~/components/common/link/CLink.vue').default)
]
