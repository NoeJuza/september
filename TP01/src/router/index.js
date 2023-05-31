import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormularTest from '../views/FormularTest.vue'
import ModifFormular from '../components/ModifFormular.vue';
import AddTask from '../components/AddTask.vue';
import PopupTest from '../views/PopupTest.vue'
import IconPickerTest from '../views/IconPickerTest.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
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
    },
    {
      path: '/popuptest',
      name: 'popuptest',
      component: PopupTest
    },
    {
      path: '/icontest',
      name: 'incontest',
      component: IconPickerTest
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
