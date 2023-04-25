<template>
    <v-container>
        <v-container>
            <TheNav/>
        </v-container>
        <v-container class="content">
            <slot name="content"></slot>
        </v-container>
        <v-container>
            <TheFooter></TheFooter>
        </v-container>
    </v-container> 
</template>

<script>
import { defineComponent } from 'vue';

// Components
import TheNav from '../components/TheNav.vue'
import TheFooter from '../components/TheFooter.vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    TheNav,
    TheFooter
  },
});
</script>