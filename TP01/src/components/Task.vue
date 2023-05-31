
<script>
export default {
  props: ['importance', 'type', 'titre', 'date']
}
</script>

<template>
  <v-container class="bg-surface rounded-lg w-75">
    <v-row>
      <v-col cols="12" class="title-row">
        <h2>{{ titre }}</h2>
      </v-col>
    </v-row>
    <v-row class="middle-row">
      <v-col cols="6" class="importance-row">
        {{ importance }}
      </v-col>
      <v-col cols="6" class="type-row">
        {{ type }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="date-row">
        <v-icon>mdi-calendar</v-icon>
        {{ date }}
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.title-row {
  background-color: #dce2b8;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
}

.importance-row {
  background-color: #dce2b8;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
}

.middle-row {
  justify-content: space-between;
}

.type-row {
  background-color: #dce2b8;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
}

.date-row {
  background-color: #dce2b8;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
