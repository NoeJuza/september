<template>
    <v-row>
        <v-col cols="4">
            <v-container class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>TO DO</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-for="(task, index) in tasks" :key="index" :importance="task.importance" :type="task.type"
                :titre="task.titre" :date="task.date" class="mb-2"></Task>
        </v-col>
        <v-col cols="4">
            <v-container class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>DOING</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-for="(task, index) in tasks" :key="index" :importance="task.importance" :type="task.type"
                :titre="task.titre" :date="task.date" class="mb-2"></Task>
        </v-col>
        <v-col cols="4">
            <v-container class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>DONE</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-for="(task, index) in tasks" :key="index" :importance="task.importance" :type="task.type"
                :titre="task.titre" :date="task.date" class="mb-2"></Task>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <input v-model="newTask.titre" placeholder="Titre" />
            <input v-model="newTask.importance" placeholder="Importance" />
            <input v-model="newTask.type" placeholder="Type" />
            <input v-model="newTask.date" placeholder="Date" />
            <v-btn @click="removeTask(index)">Supprimer</v-btn>
        </v-col>
    </v-row>
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

