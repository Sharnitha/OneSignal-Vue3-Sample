<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import OneSignal from '@onesignal/onesignal-vue3'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  async mounted() {
    const notificationsEnabled =
      await this.$OneSignal.isPushNotificationsEnabled()
    console.log('Push enabled', notificationsEnabled)

    !notificationsEnabled && this.$OneSignal.showNativePrompt()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
