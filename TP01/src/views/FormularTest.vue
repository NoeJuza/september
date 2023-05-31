<template>
    <Formular :addTask="addTaskounette">
      </Formular>
</template>
  
  <script setup>
  import { defineComponent } from 'vue';

  const addTaskounette = (objTaskIncomplete) =>{
    console.log(objTaskIncomplete)
  };
  // Components
 
  import Formular from '../components/Formular.vue';
  
  defineComponent({
    name: 'FormularTest',
  
    components: {
    
      Formular
    },
  });
  </script>
  