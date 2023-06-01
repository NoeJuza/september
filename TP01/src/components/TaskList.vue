<template>
    <v-row>
        <v-col cols="12" md="4">
            <v-container @click="toggle('showToDo')" :class="{ 'clickable': isSmallScreen }" class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>TO DO</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask('to-do')" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-if="showToDo || !isSmallScreen" v-for="(task, index) in tasksToDo" :key="index" :importance="task.importance" :type="task.type"
                :title="task.title" :date="task.date" class="mb-2"></Task>
        </v-col>
        <v-col cols="12" md="4">
            <v-container @click="toggle('showDoing')" :class="{ 'clickable': isSmallScreen }" class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>DOING</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask('doing')" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-if="showDoing || !isSmallScreen" v-for="(task, index) in tasksDoing" :key="index" :importance="task.importance" :type="task.type"
                :title="task.title" :date="task.date" class="mb-2"></Task>
        </v-col>
        <v-col cols="12" md="4">
            <v-container @click="toggle('showDone')" :class="{ 'clickable': isSmallScreen }" class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>DONE</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask('done')" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-if="showDone || !isSmallScreen" v-for="(task, index) in tasksDone" :key="index" :importance="task.importance" :type="task.type"
                :title="task.title" :date="task.date" class="mb-2"></Task>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, computed } from 'vue';
import Task from './Task.vue';

let tasksToDo = ref([{ title: 'Example Task 1', importance: 'High', type: 'Work', date: '2023-06-01' }]);
let tasksDoing = ref([]);
let tasksDone = ref([]);

let newTask = ref({ title: '', importance: '', type: '', date: '' });

let showToDo = ref(false);
let showDoing = ref(false);
let showDone = ref(false);

let isSmallScreen = ref(window.innerWidth <= 960);

window.addEventListener('resize', () => {
    isSmallScreen.value = window.innerWidth <= 960;
});

function addTask(status) {
    const taskToAdd = { ...newTask.value, status };
    newTask.value = { title: '', importance: '', type: '', date: '' };
    if (status === 'to-do') {
        tasksToDo.value.push(taskToAdd);
    } else if (status === 'doing') {
        tasksDoing.value.push(taskToAdd);
    } else if (status === 'done') {
        tasksDone.value.push(taskToAdd);
    }
}

function removeTask(index, status) {
    if (status === 'to-do') {
        tasksToDo.value.splice(index, 1);
    } else if (status === 'doing') {
        tasksDoing.value.splice(index, 1);
    } else if (status === 'done') {
        tasksDone.value.splice(index, 1);
    }
}

function toggle(status) {
    if (isSmallScreen.value) {
        if (status === 'showToDo') {
            showToDo.value = !showToDo.value;
        } else if (status === 'showDoing') {
            showDoing.value = !showDoing.value;
        } else if (status === 'showDone') {
            showDone.value = !showDone.value;
        }
    }
}
</script>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>
