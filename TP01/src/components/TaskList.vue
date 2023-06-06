<template>
    <v-row>
        <v-col cols="12" md="4" ref="toDoColumn" @dragover.prevent @drop="dropTask('to-do')">
            <v-container @click="toggle('showToDo')" :class="{ 'clickable': isSmallScreen }" class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>TO DO</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask('to-do')" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-if="showToDo || !isSmallScreen" v-for="(task, index) in tasksToDo" :key="task.id" :importance="task.priority" :type="task.taskType"
                :title="task.name" :date="task.date" class="mb-2" draggable="true" @dragstart="dragTask(task)"></Task>
        </v-col>
        <v-col cols="12" md="4" ref="doingColumn" @dragover.prevent @drop="dropTask('doing')">
            <v-container @click="toggle('showDoing')" :class="{ 'clickable': isSmallScreen }" class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>DOING</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask('doing')" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-if="showDoing || !isSmallScreen" v-for="(task, index) in tasksDoing" :key="task.id" :importance="task.priority" :type="task.taskType"
                :title="task.name" :date="task.date" class="mb-2" draggable="true" @dragstart="dragTask(task)"></Task>
        </v-col>
        <v-col cols="12" md="4" ref="doneColumn" @dragover.prevent @drop="dropTask('done')">
            <v-container @click="toggle('showDone')" :class="{ 'clickable': isSmallScreen }" class="d-flex justify-center align-center bg-surface pa-2 rounded-lg">
                <h1>DONE</h1>
            </v-container>
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="addTask('done')" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-container>
            <Task v-if="showDone || !isSmallScreen" v-for="(task, index) in tasksDone" :key="task.id" :importance="task.priority" :type="task.taskType"
                :title="task.name" :date="task.date" class="mb-2" draggable="true" @dragstart="dragTask(task)"></Task>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import Task from './Task.vue';

const props = defineProps({
    workspace: {
        type: Object,
        default: () => ({})
    }
});

let tasksToDo = ref([]);
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

watchEffect(() => {
    tasksToDo.value = props.workspace.taskList.filter(task => task.state === 'to-do');
    tasksDoing.value = props.workspace.taskList.filter(task => task.state === 'doing');
    tasksDone.value = props.workspace.taskList.filter(task => task.state === 'done');
});

function addTask(status) {
    const taskToAdd = { ...newTask.value, state: status };
    newTask.value = { title: '', importance: '', type: '', date: '' };
    props.workspace.addTask(taskToAdd);
}

function removeTask(taskId) {
    props.workspace.taskList = props.workspace.taskList.filter(task => task.id !== taskId);
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

let draggedTask = ref(null);

function dragTask(task) {
    draggedTask.value = task;
}

function dropTask(newStatus) {
    if (draggedTask.value) {
        // Update the status of the task
        draggedTask.value.state = newStatus;

        // Update the task in the list
        const taskIndex = props.workspace.taskList.findIndex(task => task.id === draggedTask.value.id);
        if (taskIndex !== -1) {
            props.workspace.taskList.splice(taskIndex, 1, draggedTask.value);
        }

        draggedTask.value = null;
    }
}
</script>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>
