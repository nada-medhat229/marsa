import { createRouter, createWebHistory, onBeforeRouteUpdate } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/About.vue'
import YachtsView from '../views/Yachts.vue'
import ToursView from '../views/Tours.vue'
import LoginView from '../views/Login.vue'
import SignupView from '../views/Signup.vue'
import ContactView from '../views/ContactView.vue'
import ControlPanel from '../views/ControlPanel.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: ControlPanel
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/contactus',
      name: 'ContactView',
      component: ContactView
    },
    {
      path: '/yachts',
      name: 'yachts',
      component: YachtsView
    },
    {
      path: '/tours',
      name: 'tours',
      component: ToursView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})

export default router
