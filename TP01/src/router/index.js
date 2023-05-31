import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import FormularTest from '../views/FormularTest.vue'
import ModifFormular from '../components/ModifFormular.vue';
import AddTask from '../components/AddTask.vue';
=======
import PopupTest from '../views/PopupTest.vue'
>>>>>>> 393da9ab9ea46cd8e16e2a2bcc156fc75e4fa148
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
<<<<<<< HEAD
      path: '/formular',
      name: 'formular',
      component: FormularTest
    },
    {
      path: '/modifformular',
      name: 'modifformular',
      component: ModifFormular
    },
    {
      path: '/task',
      name: 'AddTask',
      component: AddTask
=======
      path: '/popuptest',
      name: 'popuptest',
      component: PopupTest
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
>>>>>>> 393da9ab9ea46cd8e16e2a2bcc156fc75e4fa148
    }

  ]
})

export default router
