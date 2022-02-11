//import { BootstrapVue } from 'bootstrap-vue'
import  Vue  from 'vue'
//import VueRouter from 'vue-router';
//import routes from './router'
import vuetify from './plugins/vuetify'
import App from './App.vue';
import GoogleAuth from '@/config/google_oAuth.js'

const gauthOption = {
  clientId: '263273650927-8hg4d3stccism1g1jq5372e0g03ni6du.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}


//createApp(App).use(router).use(GoogleAuth, gauthOption).mount('#app')
//const router = new VueRouter({
 // routes
//});

//Vue.use(BootstrapVue)
//Vue.use(VueRouter)
//Vue.use(router)
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false



new Vue({
  vuetify,
 // router,
  render: h => h(App)
}).$mount('#app')
