import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/red',
    name: 'red',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/red/crimson',
    name: 'crimson',
    component: () => import(/* webpackChunkName: "crimson" */ '../views/Crimson.vue')
  },
  {
    path: '/red/dark-red',
    name: 'dark-red',
    component: () => import(/* webpackChunkName: "darkRed" */ '../views/DarkRed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
