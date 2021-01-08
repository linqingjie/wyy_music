import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
{
    path: '/',
    name: 'main',
    component: () => import('../views/Main.vue'),
    children: [
      {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hot_song_list',
    name: 'Hot_song_list',
    component: () => import( '../views/Hot_song_list.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import( '../views/Search.vue')
  }
    ]
  },

  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
