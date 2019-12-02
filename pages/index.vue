<template>
  <section class="container wrap row">
    <Col :cols="[24, 18, 12, 12, 12]" class="logo">
      <CLink to="/">Test</CLink>
      <CImg src="/icon.png" srcMobile="/icon.png" />
    </Col>
  </section>
</template>

<script>
  export default {
    methods: {
      check() {
        if (!('serviceWorker' in navigator)) {
          throw new Error('No Service Worker support!')
        }
        if (!('PushManager' in window)) {
          throw new Error('No Push API Support!')
        }
      },

      async registerServiceWorker() {
        const swRegistration = await navigator.serviceWorker.register('/sw.js')
        return swRegistration
      },

      async requestNotificationPermission() {
        const permission = await window.Notification.requestPermission()
        // value of permission can be 'granted', 'default', 'denied'
        // granted: user has accepted the request
        // default: user has dismissed the notification permission popup by clicking on x
        // denied: user has denied the request.
        if (permission !== 'granted') {
          throw new Error('Permission not granted for Notification')
        }
      }
    },
    mounted() {
      this.check();
      this.registerServiceWorker();
      this.requestNotificationPermission();
    }
  }
</script>

<!--suppress CssUnknownTarget -->
<style lang="scss">
@import '@/assets/scss/varpoint/_.scss';
@import '@/assets/scss/mixins/_img.scss';

.logo {
  @include img-center();

  @include bg-img(72, '', '');
  @include breakpoint('l') {
    @include bg-img(54, '', '');
  }
  @include breakpoint('m') {
    @include bg-img(45, '', '');
  }
  @include breakpoint('s') {
    @include bg-img(36, '', '');
  }
}
</style>
