import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewRol from '../views/ViewRol.vue'
import LoginDocente from '../views/LoginDocente.vue'
import PrincipalDocente from '../views/PrincipalDocente.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rol/:id',
    name: 'select-role',
    component: ViewRol
  },
  {
    path: '/loginDoc',
    name: 'login',
    component: LoginDocente
  },
  {
    path: '/principal',
    name: 'principaldocente',
    component: PrincipalDocente
  }
  /** 
   * 
   *
  *{
*
 *   path: '/about',
 *   name: 'about',
 *   // route level code-splitting
 *   // this generates a separate chunk (about.[hash].js) for this route
 *   // which is lazy-loaded when the route is visited.
 *   component: () => import(webpackChunkName: "about"  '../views/AboutView.vue')
 * } 
  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
