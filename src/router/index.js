import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/structure',
    name: 'Structure',
    component: () => import('../views/StructureView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
