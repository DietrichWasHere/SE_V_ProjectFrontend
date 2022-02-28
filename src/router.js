//import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
//import helloWorldnpm  from './components/HelloWorld.vue'
//import helloWorld2 from './components/HelloWorld2.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'

import LoginPage from './views/LoginPage.vue'
import ListUsers from './views/ListUsers.vue'
import ListAdmin from './views/ListAdmin.vue'
import Profile from './views/Profile.vue'
import CreateAdmin from './views/CreateAdmin.vue'
import mssgInbox from './views/Inbox.vue'


Vue.use(Router)

// https://router.vuejs.org/guide/
const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/users',
    name: 'users',
    component: ListUsers
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/admin',
    name: 'admin',
    component: ListAdmin
  },
  {
    path: '/createAdmin',
    name: 'createadmin',
    component: CreateAdmin
  },

  {
    path: '/mssgInbox',
    name: mssgInbox,
    component: mssgInbox
  },
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