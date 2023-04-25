<script>
import { defineComponent } from 'vue';

// Components
import TodoList from './TodoList.vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    TodoList
  },
});
</script>
<template>
    <v-container>
        <v-container>
            <h1>
                TODO LOL
            </h1> 
        </v-container>
        <v-container>
            <TodoList/>
        </v-container>
    </v-container>
</template>

