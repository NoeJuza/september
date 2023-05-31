<script setup>
import AppBar from '../components/AppBar.vue'
import TaskList from '../components/TaskList.vue'
</script>

<template>
    <v-app>
        <AppBar />
        <v-main class="ml-4 mr-4 mt-4">
            <TaskList />
        </v-main>
    </v-app>
</template>