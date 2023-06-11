<script setup>
import { ref } from 'vue';

const props = defineProps(['importance', 'type', 'title', 'date', 'task', 'deleteTask']);
const emits = defineEmits(['click-anywhere-but-trash'])
</script>

<template>
  <v-container class="task-container bg-surface rounded-lg w-75">
    <div class="floating-trash-can-wrapper pa-0 justify-end mt-n3 mr-n3">
      <v-icon class=" bg-accentuated-surface align-center rounded-lg" @click="deleteTask(props.task)">mdi-delete</v-icon>
    </div>
    <v-row class="mt-n15" @click="emits('click-anywhere-but-trash')">
      <v-col cols="12" class="pa-3 rounded-lg bg-primary mb-5">
        <h2 class="text-truncate">{{ props.title }}</h2>
      </v-col>
    </v-row>
    <v-row @click="emits('click-anywhere-but-trash')">
      <v-col cols="6" class="pa-3 rounded-lg text-center bg-primary">
        {{ props.importance }}
        <v-icon v-if="props.importance == 'Urgente'" color="#C2004A">mdi-exclamation-thick</v-icon>
        <v-icon v-if="props.importance == 'Moyenne'" color="#ED9C0A">mdi-waves</v-icon>
        <v-icon v-if="props.importance == 'Faible'" color="#50D861">mdi-arrow-down</v-icon>
      </v-col>
      <v-col cols="6" class="pa-3 rounded-lg text-center bg-primary">
        {{ props.type }}
      </v-col>
    </v-row>
    <v-row @click="emits('click-anywhere-but-trash')">
      <v-col cols="12" class="pa-3 rounded-lg text-center bg-primary mt-5">
        <v-icon>mdi-calendar</v-icon>
        {{ (new Date(props.date)).toLocaleDateString() }}
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