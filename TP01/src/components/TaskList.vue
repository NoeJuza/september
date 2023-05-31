<template>
    <v-app>
        <v-row no-gutters>
            <v-col cols="4" class="mb-0">
                <v-container class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                    <h1>TO DO</h1>
                </v-container>
            </v-col>
            <v-col cols="4">
                <v-container class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                    <h1>DOING</h1>
                </v-container>
            </v-col>
            <v-col cols="4">
                <v-container class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                    <h1>DONE</h1>
                </v-container>
            </v-col>

            <v-col cols="4" class="d-flex flex-column justify-center align-center" v-for="(task, index) in tasks"
                :key="index">
                <Task :importance="task.importance" :type="task.type" :titre="task.titre" :date="task.date"></Task>
                <v-btn @click="removeTask(index)">Supprimer</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <input v-model="newTask.titre" placeholder="Titre" />
                <input v-model="newTask.importance" placeholder="Importance" />
                <input v-model="newTask.type" placeholder="Type" />
                <input v-model="newTask.date" placeholder="Date" />

                <v-btn @click="addTask">Ajouter</v-btn>
            </v-col>
        </v-row>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
import Task from './TAsk.vue';

let tasks = ref([]);

let newTask = ref({ title: '', importance: '', type: '', date: '' });

function addTask() {
    tasks.value.push({ ...newTask.value });
    newTask.value = { title: '', importance: '', type: '', date: '' };
}

function removeTask(index) {
    tasks.value.splice(index, 1);
}

</script>

