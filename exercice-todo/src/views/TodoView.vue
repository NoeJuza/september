<template>
    <MainLayout>
      <template #content>
        <TodoComp/>
      </template>
    </MainLayout>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import TodoComp from '../components/TodoComp.vue'
import MainLayout from './MainLayout.vue';
export default defineComponent({
  name: 'TodoView',
  components: {
    TodoComp,
    MainLayout
},
});
</script>
  