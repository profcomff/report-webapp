import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
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
