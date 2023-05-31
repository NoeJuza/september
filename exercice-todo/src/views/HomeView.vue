<template>
  <MainLayout>
    <Formular />
  </MainLayout>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import TheWelcome from '../components/TheWelcome.vue';
import MainLayout from './MainLayout.vue';
import Formular from '../components/Formular.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    //TheWelcome,
    //MainLayout,
    Formular
},
});
</script>
