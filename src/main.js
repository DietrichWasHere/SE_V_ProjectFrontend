import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// https://v3.router.vuejs.org/installation.html#direct-download-cdn
// createApp(App).use(router).mount('#app')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
