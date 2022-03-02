import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '263273650927-8hg4d3stccism1g1jq5372e0g03ni6du.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}



Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false


router.afterEach((to, from, next) => {
  Vue.nextTick( () => {
    document.title = to.meta.title ? to.meta.title : 'default title';
    next();
  });
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
