<script setup>
import { ref } from 'vue';

const props = defineProps(['importance', 'type', 'title', 'date', 'task', 'deleteTask']);

const hover = ref(false);

const mouseOver = () => {
  hover.value = true;
};

const mouseLeave = () => {
  hover.value = false;
};
</script>

<template>
  <v-container class="task-container bg-surface rounded-lg w-75" @mouseenter="mouseOver" @mouseleave="mouseLeave">
    <div class="floating-trash-can-wrapper pa-0 justify-end mt-n3 mr-n3">
      <v-icon class=" bg-accentuated-surface align-center rounded-lg" @click="deleteTask(props.task)">mdi-delete</v-icon>
    </div>
    <v-row class="mt-n15">
      <v-col cols="12" class="pa-3 rounded-lg bg-primary mb-5">
        <h2 class="text-truncate">{{ props.title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="pa-3 rounded-lg text-center bg-primary">
        {{ props.importance }}
      </v-col>
      <v-col cols="6" class="pa-3 rounded-lg text-center bg-primary">
        {{ props.type }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pa-3 rounded-lg text-center bg-primary mt-5">
        <v-icon>mdi-calendar</v-icon>
        {{ props.date }}
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.floating-trash-can-wrapper{
  visibility:hidden;
  display: flex;
}
.floating-trash-can-wrapper i{

  width: 60px;
  height: 60px;
}
.task-container:hover .floating-trash-can-wrapper{
  visibility: visible;
}
</style>