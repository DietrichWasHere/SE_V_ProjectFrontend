import {createRouter, createWebHistory} from 'vue-router'
import helloWorld from '../components/HelloWorld.vue'
import helloWorld2 from '../components/HelloWorld2.vue'
//import studentMenu from '../views/studentMenu.vue'
//import viewName from '../views/viewName.vue'



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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router