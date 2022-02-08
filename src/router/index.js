import {createRouter, createWebHistory} from 'vue-router'
import testpage from '../views/adminmenu.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'



const routes = [
  {
    path: '/courseAdd',
    name: 'courseAdd',
    component: courseEditEntry
  }
]


// https://stackoverflow.com/questions/47591679/multiple-routers-with-vue

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router