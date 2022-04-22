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
import Review from './views/Review.vue'


import Calendar from './views/Calendar.vue'

import StudentCalendar from './views/StudentCalendar.vue'

import AppointmentRequest from './views/AppointmentRequest.vue'


import LoginPage from './views/LoginPage.vue'
import Profile from './views/ProfilePage.vue'

import InboxTutorRequest from './views/InboxTutorRequest.vue'

import Inbox from './views/Inbox.vue'
import ListUsers from './views/ListUsers.vue'
import ListAdmin from './views/ListAdmin.vue'
import CreateAdmin from './views/CreateAdmin.vue'
import ListOrgs from './views/ListOrgs.vue'
import dvTestPage from './views/dvTestPage.vue'
import ListTutors from './views/ListTutors.vue'
Vue.use(Router)

// https://router.vuejs.org/guide/
const routes = [
  {
    path: '/:orgName',
    name: 'loginpage',
    props: true,
    component: LoginPage,
    meta: { title: 'Log In' }
  },
  /*{
    // https://stackoverflow.com/questions/37937262/passing-props-to-vue-js-components-instantiated-by-vue-router
    path: '/newUser/:orgID',
    name: 'newUserByOrg',
    props: true,
    component: LoginPage,
    meta: { title: 'Log In' }
  },*/
  {
    path: '/:orgName/studentContract',
    name: 'studentContract',
    props: true,
    component: StudentContract,
    meta: { title: 'Tutoring Agreement Contract' }
  },
  {
    path: '/:orgName/tutorContract',
    name: 'tutorContract',
    props: true,
    component: TutorContract,
    meta: { title: 'Tutoring Agreement Contract' }
  },
  {
    path: '/:orgName/profile',
    name: 'profile',
    props: true,
    component: Profile,
    meta: { title: 'User Profile' }
  },
  {
    path: '/:orgName/users',
    name: 'users',
    component: ListUsers,
    meta: { title: 'User' }
  },
  {
    path: '/:orgName/orgs',
    name: 'organizations',
    component: ListOrgs,
    meta: { title: 'Organizations' }
  },
  {
    path: '/:orgName/inboxtutorrequest',
    name: 'Tutor Requests',
    component: InboxTutorRequest
  },
  {
    path: '/:orgName/inbox',
    name: 'Notifications',
    component: Inbox
  },
  {
    path: '/:orgName/admin',
    name: 'admin',
    component: ListAdmin,
    meta: { title: 'Admin' }
  },
  {
    path: '/:orgName/createAdmin',
    name: 'createadmin',
    component: CreateAdmin,
    meta: { title: 'Create Admin' }
  },
  {
    path: '/:orgName/calendar',
    name: 'calendar',
    component: Calendar,
    meta: { title: 'Calendar' }
  },
  {

    path: '/:orgName/calendars',
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
    path: '/:orgName/appointmentrequest',
    name: 'appointmentrequest',
    component: AppointmentRequest,
    meta: { title: 'Appointment Request' }
  },
  {
    path: '/:orgName/review/:id',
    name: 'review',
    props : true,
    component: Review,
    meta: { title: 'Review' }
  },
  {    
    path: '/:orgName/dvTest',
    name: 'dvTest',
    component: dvTestPage,
  },
  {
    path: '/:orgName/tutors/',
    name: 'tutorList',
    props: true,
    component: ListTutors,
    meta: { title: 'Tutors' }
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
