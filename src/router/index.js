import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/AuthPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'analytics',
    component: () => import('../views/Analytics.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/AuthPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
