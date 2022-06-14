import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewRol from '../views/ViewRol.vue'
import LoginDocente from '../views/LoginDocente.vue'
import PrincipalDocente from '../views/PrincipalDocente.vue'
import PlataformasEvaluacion from '../views/PlataformasEvaluacion.vue'
import EvaluacionesDatos from '../views/EvaluacionesDatos.vue'
import RegistroGrupos from '../views/RegistroGrupos.vue'
import RegistroEstudiantes from '../views/RegistroEstudiantes.vue'
import EmbedJotform from '../views/EmbedJotform.vue'
import EmbedKahoot from '../views/EmbedKahoot.vue'

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
  },
  {
    path: '/plataformas',
    name: 'plataformasevaluacion',
    component: PlataformasEvaluacion
  },
  {
    path: '/evaluaciondatos',
    name: 'evaluaciondatos',
    component: EvaluacionesDatos
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroGrupos
  },
  {
    path: "/registro-students",
    name: "registro-students",
    component: RegistroEstudiantes
  },
  {
    path: "/jotform",
    name: "jotform",
    component: EmbedJotform,
    children : [
      {
        path: '',
        component: () => import('@/components/menu/AsignarDemo.vue')
      },
      {
        path : '/jotform/credential',
        component: () => import('@/components/menu/CredencialDemo.vue')
      },
      {
        path: '/jotform/workspace',
        component: () => import('@/components/menu/AreaDemo.vue')
      }
    ]
  },
  {
    path: "/kahoot",
    name: "kahoot",
    component: EmbedKahoot
  },
                
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
