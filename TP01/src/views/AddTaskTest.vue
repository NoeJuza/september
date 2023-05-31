<template>
    <AddTask :addTask="addTaskounette">
      </AddTask>
</template>
  
  <script setup>
  import { defineComponent } from 'vue';

  const addTaskounette = (objTaskIncomplete) =>{
    console.log(objTaskIncomplete)
  };
  // Components
 
  import AddTask from '../components/AddTask.vue';
  
  defineComponent({
    name: 'AddTaskTest',
  
    components: {
    
        AddTask
    },
  });
  </script>
  