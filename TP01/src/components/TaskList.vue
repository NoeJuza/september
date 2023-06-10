<template>
    <v-row no-gutters class="pb-2">
        <TaskColumn :key="refKeyTODOs" name="TO DO" :elts="tasksToDo" :notCollapsed="showToDo" :toggleCollapsed="toggle" :dragTask="dragTask" :btnHandler="() =>{btnHandler('todo')}" :deleteTask="deleteTask" :handleContextMenuTask="props.taskContextMenuHandler"  ref="toDoColumn" @dragover.prevent @drop="dropTask('todo')">
        </TaskColumn>
        <TaskColumn :key="refKeyDOINGs" name="DOING" :elts="tasksDoing" :notCollapsed="showDoing" :toggleCollapsed="toggle" :dragTask="dragTask" :btnHandler="() =>{btnHandler('doing')}" :deleteTask="deleteTask" :handleContextMenuTask="props.taskContextMenuHandler"  ref="toDoColumn" @dragover.prevent @drop="dropTask('doing')">
        </TaskColumn>
        <TaskColumn :key="refKeyDONEs" name="DONE" :elts="tasksDone" :notCollapsed="showDone" :toggleCollapsed="toggle" :dragTask="dragTask" :btnHandler="() =>{btnHandler('done')}" :deleteTask="deleteTask" :handleContextMenuTask="props.taskContextMenuHandler"  ref="toDoColumn" @dragover.prevent @drop="dropTask('done')">
        </TaskColumn>
    </v-row>
</template>

<script setup>
import { reactive, ref, watchEffect} from 'vue'
import TaskColumn from './TaskColumn.vue';

const props = defineProps({
    workspace: {
        type: Object,
        default: () => ({})
    },
    taskContextMenuHandler: Function 
});
//console.log(props.taskContextMenuHandler)
let tasksToDo = reactive(props.workspace.taskList.filter(task => task.state === 'todo'));
let tasksDoing = reactive(props.workspace.taskList.filter(task => task.state === 'doing'));
let tasksDone = reactive(props.workspace.taskList.filter(task => task.state === 'done'));
let refKeyTODOs = ref('TODO-' + tasksToDo.length)
let refKeyDOINGs = ref('DOING-' + tasksDoing.length)
let refKeyDONEs = ref('DONE-' + tasksDone.length)
watchEffect(() => {
    tasksToDo = props.workspace.taskList.filter(task => task.state === 'todo')
    tasksDoing = props.workspace.taskList.filter(task => task.state === 'doing')
    tasksDone = props.workspace.taskList.filter(task => task.state === 'done')
    //console.log("props.workspace.tasklist should've changed by now")
    //console.log(tasksToDo.length, tasksDoing.length,tasksDone.length)
    refKeyTODOs.value = 'TODO-' + tasksToDo.length
    refKeyDOINGs.value = 'DOING-' + tasksDoing.length
    refKeyDONEs.value = 'DONE-' + tasksDone.length
});

let isSmallScreen = ref(window.innerWidth <= 960);

let showToDo = ref(true);
let showDoing = ref(!isSmallScreen.value);
let showDone = ref(!isSmallScreen.value);

window.addEventListener('resize', () => {
    isSmallScreen.value = window.innerWidth <= 960;
    showToDo.value = true;
    showDoing.value = !isSmallScreen.value;
    showDone.value = !isSmallScreen.value;
});

function btnHandler(status) {
    props.workspace.addTask(status);
}

function toggle(status) {
    //console.log(status)
    if (isSmallScreen.value) {
        if (status === 'showTO DO') {
            showToDo.value = !showToDo.value;
        } else if (status === 'showDOING') {
            showDoing.value = !showDoing.value;
        } else if (status === 'showDONE') {
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
        //console.log(draggedTask.value)
        const clone = {...draggedTask.value}
        const updatedTask = { ...clone, state: newStatus };
        props.workspace.editTask(updatedTask.id, updatedTask);
        draggedTask.value = null;
    }
    //console.log(props.workspace)
}

function deleteTask(task) {
    props.workspace.removeTask(task.id);
}
</script>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>
