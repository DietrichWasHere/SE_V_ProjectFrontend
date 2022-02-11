

import {createRouter, createWebHistory} from 'vue-router'
//import adminmenu from '../views/adminmenu.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'
import AdminCrudMenu from '../views/AdminCrudMenu.vue';






const routes = [
  {
    path: '/',
    name: 'admincrudmenu',
    component: AdminCrudMenu
  }
]


// https://stackoverflow.com/questions/47591679/multiple-routers-with-vue

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router