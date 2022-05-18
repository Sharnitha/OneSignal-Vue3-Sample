import { createApp } from 'vue'
import OneSignal from '@onesignal/onesignal-vue3'
import App from './App.vue'
import { _OneSignalAppId_ } from './common/constants'

const app = createApp(App, {
  productionTip: false
})

app.use(OneSignal, {
  appId: _OneSignalAppId_,
  allowLocalhostAsSecureOrigin: true
})

app.mount('#app')
