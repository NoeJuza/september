import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTaskTest from '../views/AddTaskTest.vue'
import EditTaskTest from '../views/EditTaskTest.vue';
import AddWorkspaceTest from '../views/AddWorkspaceTest.vue';
import AddTaskPopupTest from '../views/AddTaskPopupTest.vue';
import EditTaskPopupTest from "../views/EditTaskPopupTest.vue"
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
      path: '/addtasktest',
      name: 'addtasktest',
      component: AddTaskTest
    },
    {
      path: '/edittasktest',
      name: 'edittasktest',
      component: EditTaskTest
    },
    {
      path: '/addworkspacetest',
      name: 'addworkspacetest',
      component: AddWorkspaceTest
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
      path: '/addtaskpopuptest',
      name: 'addtaskpopuptest',
      component: AddTaskPopupTest
    },
    {
      path: '/edittaskpopuptest',
      name: 'edittaskpopuptest',
      component: EditTaskPopupTest
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
