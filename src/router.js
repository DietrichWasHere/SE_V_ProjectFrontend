//import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
//import helloWorldnpm  from './components/HelloWorld.vue'
//import helloWorld2 from './components/HelloWorld2.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'

import Admin from './views/Admin.vue'
import Profile from './views/Profile.vue'
import LoginPage from './views/LoginPage.vue'
import CreateAdmin from './views/CreateAdmin.vue'



Vue.use(Router)

// https://router.vuejs.org/guide/
const routes = [

  {
    path: '/',
    name: 'profile',
    component: Profile,

    
  },
  {
    path: '/loginpage',
    name: 'loginpage',
    component: LoginPage
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/createAdmin',
    name: 'createadmin',
    component: CreateAdmin
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