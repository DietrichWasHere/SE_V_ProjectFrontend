import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '263273650927-8hg4d3stccism1g1jq5372e0g03ni6du.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
