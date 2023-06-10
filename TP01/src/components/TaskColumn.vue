<template>
    <v-col  cols="12" md="4" class="pa-0 pa-md-2 pt-2">
        <v-container @click="toggleCollapsed('show'+props.name)" :class="{ 'clickable': isSmallScreen }" class="drop-shadow d-flex justify-center align-center bg-surface pa-0 pa-md-2 rounded-lg">
            <h1>{{props.name}}</h1>
        </v-container>
        <div v-if="notCollapsed">
            <v-container class="align-center justify-center d-flex">
                <v-btn @click="btnHandler()" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg drop-shadow"></v-btn>
            </v-container>
            <Task  v-for="(task) in elts" :key="task.id" :task="task" :importance="task.priority" :type="task.taskType"
            :title="task.name" :date="task.date" :deleteTask="deleteTask" class="mb-2" draggable="true" @dragstart="props.dragTask(task)" @contextmenu="(e) =>handleContextMenuTask(e,task)"></Task>
        </div>
    </v-col>
</template>
<script setup>
import { ref } from 'vue';
import Task from './Task.vue';
let isSmallScreen = ref(window.innerWidth <= 960);
const props = defineProps({
    name:String,
    elts:Array,
    notCollapsed:Boolean,
    toggleCollapsed:Function,
    btnHandler: Function,
    dragTask:Function,
    deleteTask:Function,
    handleContextMenuTask: Function
})
function handleContextMenuTask (e,task) {
    console.log(props.handleContextMenuTask)
    props.handleContextMenuTask(e,task)
}
</script>
<style scoped>
</style>
