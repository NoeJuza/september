<template>
  <v-container>
    <h1>Project September</h1>
    <div>
      <router-link to="popuptest">Test Popup alone</router-link>
    </div>
    <div>
      <router-link to="addtasktest">Test add task alone</router-link>
    </div>
    <div>
      <router-link to="edittasktest">Test edit task alone</router-link>
    </div>
    <div>
      <router-link to="addworkspacetest">Test add workspace alone</router-link>
    </div>
    <div>
      <router-link to="addtaskpopuptest">Test add task inside popup</router-link>
    </div>
    <div>
      <router-link to="edittaskpopuptest">Test edit task inside popup</router-link>
    </div>
    <div>
      <router-link to="addworkspacepopuptest">Test add workspace inside popup</router-link>
    </div>
    <div>
      <router-link to="appbartest">Test appbar alone</router-link>
    </div>
    <div>
      <router-link to="tasklisttest">Test tasklist alone</router-link>
    </div>
    <div>
      <router-link to="testBaseLayout">Test base layout (app-bar + taskList)</router-link>
    </div>
  </v-container>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components


export default defineComponent({
  name: 'HomeView',

  components: {
    
    
  },
});
</script>
