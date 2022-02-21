//import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'

//import LoginPage from './views/LoginPage.vue'
import Profile from './views/Profile.vue'
import ListSupervisors from './views/ListSupervisors.vue'
import CreateAdmin from './views/CreateAdmin.vue'



Vue.use(Router)

// https://router.vuejs.org/guide/
const routes = [
  /*{
    path: '/loginpage',
    name: 'loginpage',
    component: LoginPage
  },*/
  {
    path: '/',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/supervisors',
    name: 'supervisors',
    component: ListSupervisors
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