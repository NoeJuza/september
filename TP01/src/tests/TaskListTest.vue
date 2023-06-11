<template>
    <div class="test-wrapper">
        <PopupComp :key="'contextual-popup-for-'+ contextualSelectedTask?.id" :title="'Supprimer '+ contextualSelectedTask?.name +'?'" :editable="false" :show="popupContextShowed" :set-show="setpopupContextShowed">
            <template #content>
                <v-btn @click="handleContextualButtonClick('no')">Non</v-btn>
                <v-btn @click="handleContextualButtonClick('yes')" class="bg-accentuated-surface">Oui</v-btn>
            </template>
        </PopupComp>
        <TaskList :workspace="workspace" :task-context-menu-handler="reactiveContextMenu"/>
    </div>
</template>

<script setup>
import { reactive, ref} from 'vue';
import TaskList from '../components/TaskList.vue';
import PopupComp from '../components/PopupComp.vue';
const popupContextShowed = ref(false);
const contextualSelectedTask = ref(null)
const setpopupContextShowed = (value)=>{
    popupContextShowed.value = value
}
const handleContextualButtonClick = (yesno) =>{
    popupContextShowed.value = false;
    if(yesno == "yes"){
        removeTask(contextualSelectedTask.value.id)
    }
}
const reactiveContextMenu = (e,task) =>{
    e.preventDefault();
    console.log(task);
    popupContextShowed.value = true;
    contextualSelectedTask.value = task;
}
const addTask = (status) => {
    workspace.taskList.push({
        id: Math.max(...[0,...(workspace.taskList).map(e =>e.id)]) - -1,
        state: status,
        name:"nouvelle tâche statique tah la flemme de faire un popup mtn",
        description: "tkt mdrrrrrrrr",
        date: "2023-06-02",
        notif: true,
        whenNotif: '2023-06-01',
        priority: 'High',
        taskType: 'Work'
    });
}
const editTask = (id,newDatas) =>{
    //console.log(id,newDatas)
    workspace.taskList = workspace.taskList.map(x => x.id == id ? newDatas : x )
}
const removeTask = (id)=>{
    workspace.taskList = workspace.taskList.filter(x => x.id != id)
    console.log(workspace.taskList)
}

let workspace = reactive({
    id: 1,
    name: "Workspace 1",
    icon: "icon",
    iconColor: "color",
    taskList: [
        { id: 1, name: 'Task 1', state: 'todo', description: 'Description 1', date: '2023-06-01', notif: true, whenNotif: '2023-06-01', priority: 'High', taskType: 'Work' },
        { id: 2, name: 'Task 2', state: 'doing', description: 'Description 2', date: '2023-06-02', notif: false, whenNotif: '2023-06-02', priority: 'Low', taskType: 'Personal' },
        { id: 3, name: 'Task 3', state: 'done', description: 'Description 3', date: '2023-06-03', notif: true, whenNotif: '2023-06-03', priority: 'Medium', taskType: 'Work' }
    ],
    addTask: addTask,
    editTask: editTask,
    removeTask: removeTask,
});
</script>
<style scoped>
</style>
