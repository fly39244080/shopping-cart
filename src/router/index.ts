import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/category'
    },
    {
      path: '/category',
      name: 'category',
      component: ()=>import('@/views/Category.vue')
    },
    {
      path: '/finder',
      name: 'Finder',
      component: ()=>import('@/views/Finder.vue')
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: ()=>import('@/views/Shopping.vue')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: ()=>import('@/views/Mine.vue')
    },
   
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
