import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exterior',
    name: 'Exterior',
    component: () => import('@/views/exterior')
  },
  {
    path: '/nacional',
    name: 'Nacional',
    component: () => import('@/views/nacional')
  },
  {
    path: '/pacotes',
    name: 'Pacotes',
    component: () => import('@/views/pacotes')
  },
  {
    path: '/hoteis',
    name: 'Hoteis',
    component: () => import('@/views/hoteis')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('@/views/cards')
  },
  {
    path: '/cardsUsers',
    name: 'CardsUsers',
    component: () => import('@/views/cardsUsers')
  }
]

const router = new VueRouter({
  routes
})

export default router
