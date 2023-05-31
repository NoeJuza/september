<script setup>
import AppBar from '../components/AppBar.vue'
import TaskList from '../components/TaskList.vue'
</script>

<template>
    <v-app>
        <AppBar />
        <v-main app class="ml-8 mr-8 mt-8">
            <TaskList />
        </v-main>
    </v-app>
</template>