//import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
//import helloWorldnpm  from './components/HelloWorld.vue'
//import helloWorld2 from './components/HelloWorld2.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'

// import Admin from './views/Admin.vue'
import Contract from './views/Contract.vue'
import Calendar from './views/Calendar.vue'

import AppointmentRequest from './views/AppointmentRequest.vue'


import LoginPage from './views/LoginPage.vue'
import Profile from './views/ProfilePage.vue'


import Inbox from './views/Inbox.vue'
import ListUsers from './views/ListUsers.vue'
import ListAdmin from './views/ListAdmin.vue'
import CreateAdmin from './views/CreateAdmin.vue'

import dvTestPage from './views/dvTestPage.vue'

Vue.use(Router)

// https://router.vuejs.org/guide/
const routes = [
  {
    path: '/',
    name: 'profile',
    component: Profile,
    meta: { title: 'User Profile' }
  },
  {
    path: '/loginpage',

    name: 'loginpage',
    component: LoginPage,
    meta: { title: 'Log In' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { title: 'Profile' }
  },
  {
    path: '/users',
    name: 'users',
    component: ListUsers,
    meta: { title: 'User' }
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: Inbox
  },

  {
    path: '/dvTest',
    name: 'dvTest',
    component: dvTestPage,
  },

  {
    path: '/admin',
    name: 'admin',
    component: ListAdmin,
    meta: { title: 'Admin' }
  },
  {
    path: '/createAdmin',
    name: 'createadmin',
    component: CreateAdmin,
    meta: { title: 'Create Admin' }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
    meta: { title: 'Calendar' }
  },
  {
    path: '/contract',
    name: 'cotract',
    component: Contract,
    meta: { title: 'Tutoring Agreement Contract' }
  },
  /*{
    path: '/contractstudent',
    name: 'cotractstudent',
    component: ContractStudent,
    meta: { title: 'Tutoring Agreement Contract' }
  },*/
  {
    path: '/appointmentrequest',
    name: 'appointmentrequest',
    component: AppointmentRequest,
    meta: { title: 'Appointment Request' }
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
