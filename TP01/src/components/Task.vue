<script>
export default {
  props: ['importance', 'type', 'title', 'date']
}
</script>

<template>
  <v-container class="bg-surface rounded-lg w-75">
    <v-row>
      <v-col cols="12" class="pa-3 rounded-lg bg-primary mb-5">
        <h2>{{ title }}</h2>
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

