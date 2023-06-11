import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../tests/HomeView.vue'
import AddTaskTest from '../tests/AddTaskTest.vue'
import EditTaskTest from '../tests/EditTaskTest.vue';
import AddWorkspaceTest from '../tests/AddWorkspaceTest.vue';
import AddTaskPopupTest from '../tests/AddTaskPopupTest.vue';
import EditTaskPopupTest from "../tests/EditTaskPopupTest.vue"
import PopupTest from '../tests/PopupTest.vue'
import IconPickerTest from '../tests/IconPickerTest.vue'
import AddWorkspacePopupTest from '../tests/AddWorkspacePopupTest.vue'
import SeptemberView from '../views/SeptemberView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name: 'september',
      component: SeptemberView
    },
    {
      path: '/hometest',
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
      path: '/addworkspacepopuptest',
      name: 'addworkspacepopuptest',
      component: AddWorkspacePopupTest
    },
    {
      path: '/appbartest',
      name: 'appbartest',
      component: () => import('../tests/AppBarTest.vue')
    },
    {
      path: '/tasklisttest',
      name: 'tasklisttest',
      component: () => import('../tests/TaskListTest.vue')
    },
    {
      path: '/baselayouttest',
      name: 'baselayouttest',
      component: () => import('../tests/BaseLayoutTest.vue')
    }
  ]
})

export default router
