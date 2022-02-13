//import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from '../components/HelloWorld.vue'
import helloWorld2 from '../components/HelloWorld2.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'

Vue.use(Router)

// https://router.vuejs.org/guide/
const routes = [
  {
    path: '/',
    name: 'default',
    component: helloWorld
  },
  {
    path: '/hi',
    name: 'hi',
    component: helloWorld2
  }
]


// https://stackoverflow.com/questions/47591679/multiple-routers-with-vue

export default  new Router({
  mode: 'history',
  base:
    process.env.NODE_ENV === 'development'
      ? '/'
      : '/webpages/studentapp_vue/dist/',
  routes: routes
})

