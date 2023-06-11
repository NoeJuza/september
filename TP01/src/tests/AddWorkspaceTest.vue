<template>
    <AddWorkspace :addWorkspace="addWorkspaceHandler">
      </AddWorkspace>
</template>
  
  <script setup>
  import { defineComponent } from 'vue';

  const addWorkspaceHandler = (objWorkspace) =>{
    console.log(objWorkspace)
  };
  // Components
 
  import AddWorkspace from '../components/AddWorkspace.vue';
  
  defineComponent({
    name: 'AddWorkspaceTest',
  
    components: {
        AddWorkspace
    },
  });
  </script>
  