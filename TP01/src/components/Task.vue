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
  <v-container class="bg-surface rounded-lg w-75" @mouseenter="mouseOver" @mouseleave="mouseLeave">
    <v-row>
      <v-col v-if="!hover" cols="12" class="pa-3 rounded-lg bg-primary mb-5">
        <h2>{{ title }}</h2>
      </v-col>
      <v-col v-if="hover" cols="10" class="pa-3 rounded-lg bg-primary mb-5">
        <h2>{{ title }}</h2>
      </v-col>
      <v-col v-if="hover" cols="2" class="pa-3 rounded-lg bg-primary mb-5 d-flex justify-end">
        <v-icon color="red" @click="deleteTask(task)" class="align-center">mdi-delete</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="pa-3 rounded-lg text-center bg-primary">
        {{ importance }}
      </v-col>
      <v-col cols="6" class="pa-3 rounded-lg text-center bg-primary">
        {{ type }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pa-3 rounded-lg text-center bg-primary mt-5">
        <v-icon>mdi-calendar</v-icon>
        {{ date }}
      </v-col>
    </v-row>
  </v-container>
</template>
