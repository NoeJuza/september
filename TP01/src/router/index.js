import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormularTest from '../views/FormularTest.vue'
import ModifFormular from '../components/ModifFormular.vue';
import AddTask from '../components/AddTask.vue';
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
    }
  ]
})

export default router
