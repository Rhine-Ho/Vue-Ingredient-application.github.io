import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: () => import('../views/MealsByName.vue')
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: () => import('../views/MealsByLetter.vue')
        },
        {
          path: '/by-ingredient/:ingredient?',
          name: 'byIngredient',
          component: () => import('../views/MealsByIngredient.vue')
        },
        {
          path: '/meal/:id?',
          name: 'mealDetail',
          component: () => import('../views/MealDetails.vue')
        }
      ]
    },
    {
      path: '/guest',
      component: () => import('../components/GuestLayout.vue')
    }
  ]
})

export default router
