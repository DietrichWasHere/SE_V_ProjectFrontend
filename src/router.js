//import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
//import helloWorldnpm  from './components/HelloWorld.vue'
//import helloWorld2 from './components/HelloWorld2.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'

// import Admin from './views/Admin.vue'
import StudentContract from './views/ContractStudent.vue'
import TutorContract from './views/ContractTutor.vue'
import Calendar from './views/Calendar.vue'

import StudentCalendar from './views/StudentCalendar.vue'

import AppointmentRequest from './views/AppointmentRequest.vue'


import LoginPage from './views/LoginPage.vue'
import Profile from './views/ProfilePage.vue'


import Inbox from './views/Inbox.vue'
import ListUsers from './views/ListUsers.vue'
import ListAdmin from './views/ListAdmin.vue'
import CreateAdmin from './views/CreateAdmin.vue'
import ListOrgs from './views/ListOrgs.vue'
import dvTestPage from './views/dvTestPage.vue'

Vue.use(Router)

// https://router.vuejs.org/guide/
const routes = [
  {
    path: '/',
    name: 'loginpage',
    component: LoginPage,
    meta: { title: 'Log In' }
  },
  {
    // https://stackoverflow.com/questions/37937262/passing-props-to-vue-js-components-instantiated-by-vue-router
    path: '/newUser/:orgID',
    name: 'newUserByOrg',
    props: true,
    component: LoginPage,
    meta: { title: 'Log In' }
  },
  {
    path: '/studentContract/:orgID',
    name: 'studentContract',
    props: true,
    component: StudentContract,
    meta: { title: 'Tutoring Agreement Contract' }
  },
  {
    path: '/tutorContract',
    name: 'tutorContract',
    props: true,
    component: TutorContract,
    meta: { title: 'Tutoring Agreement Contract' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { title: 'User Profile' }
  },
  {
    path: '/users',
    name: 'users',
    component: ListUsers,
    meta: { title: 'User' }
  },
  {
    path: '/orgs',
    name: 'organizations',
    component: ListOrgs,
    meta: { title: 'Organizations' }
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: Inbox
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
    path: '/studentcalendar',
    name: 'studentcalendar',
    component: StudentCalendar,
    meta: { title: 'Calendar' }
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
  },
  {
    path: '/dvTest',
    name: 'dvTest',
    component: dvTestPage,
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
