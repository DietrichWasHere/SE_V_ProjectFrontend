//import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
//import helloWorldnpm  from './components/HelloWorld.vue'
//import helloWorld2 from './components/HelloWorld2.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'
import AdminCrudMenu from './views/AdminCrudMenu.vue'
import Profile from './views/Profile.vue'


Vue.use(Router)

// https://router.vuejs.org/guide/
const routes = [
  {
    path: '/',
    name: 'admincrudmenu',
    component: AdminCrudMenu
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]


// https://stackoverflow.com/questions/47591679/multiple-routers-with-vue

export default new Router({
  mode: 'history',
  base:
    process.env.NODE_ENV === 'development'
      ? '/'
      : '/',
  routes: routes
})