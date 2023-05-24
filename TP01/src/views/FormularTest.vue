<template>
    <Formular />
    
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
 
  import Formular from '../components/Formular.vue';
  
  export default defineComponent({
    name: 'FormularTest',
  
    components: {
    
      Formular
    },
  });
  </script>
  