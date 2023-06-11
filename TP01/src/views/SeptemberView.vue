<script setup>
import dataGlobal from '../datastructure.json'
import AppBar from '../components/AppBar.vue'
import TaskList from '../components/TaskList.vue'
import AddTaskPopup from '../components/AddTaskPopup.vue'
import EditTaskPopup from '../components/EditTaskPopup.vue'
import AddWorkspacePopup from '../components/AddWorkspacePopup.vue'
import { reactive, ref } from 'vue'
import PopupComp from '../components/PopupComp.vue'
const reactiveDataGlobal = reactive(dataGlobal);
const forwhenEdited = ref(0)
reactiveDataGlobal.addWorkspace = (obj) =>{
    console.log(reactiveDataGlobal, obj)
    const id = Math.max( ...(reactiveDataGlobal.workspaces.map(e =>e.id)) ) - -1
    obj.id = id
    obj.taskList = []
    obj.addTask = (obj) =>{addTaskInWorkspace(id,obj)} 
    obj.editTask = (taskid, newdatas) =>{editTaskInWorkspace(id,taskid,newdatas)} 
    obj.removeTask = (taskid) =>{removeTaskInWorkspace(id,taskid)}
    reactiveDataGlobal.workspaces.push(obj)    
}
reactiveDataGlobal.removeWorkspace = (id) =>{
    if (reactiveDataGlobal.workspaces.length > 1) {
        console.log(id)
        if(id == currentlySelectedWorkspace.value){
            currentlySelectedWorkspace.value = reactiveDataGlobal.workspaces.find(x => x.id != id).id;
        }
        reactiveDataGlobal.workspaces = reactiveDataGlobal.workspaces.filter(x => x.id != id)
    }
}
const addTaskInWorkspace = (workId, obj) =>{
    console.log(obj)
    reactiveDataGlobal.workspaces.find(x => x.id == workId).taskList.push(obj)
}
const editTaskInWorkspace = (workId, id, newdatas) =>{
    console.log(id, newdatas)
    console.log(reactiveDataGlobal)
    reactiveDataGlobal.workspaces.find(x => x.id == workId).taskList = reactiveDataGlobal.workspaces.find(x => x.id == workId).taskList.map(x => x.id == id ? newdatas : x);
}
const removeTaskInWorkspace = (workId, id) =>{
    reactiveDataGlobal.workspaces.find(x => x.id == workId).taskList = reactiveDataGlobal.workspaces.find(x => x.id == workId).taskList.filter(x => x.id != id)
}
reactiveDataGlobal.workspaces[0].addTask = (obj) => {addTaskInWorkspace(1,obj)}
reactiveDataGlobal.workspaces[0].editTask = (id,newdatas) =>{editTaskInWorkspace(1,id,newdatas)}
reactiveDataGlobal.workspaces[0].removeTask = (id) =>{removeTaskInWorkspace(1,id)}
console.log(reactiveDataGlobal)

const currentlySelectedWorkspace = ref(1);
const setCurrentlySelectedWorkspace = (val) =>{
        currentlySelectedWorkspace.value = val;
        console.log(currentlySelectedWorkspace.value)
        console.log(reactiveDataGlobal)
}
const showFormWorkspace = ref(false);
const handleBtnAppBarAdd = () =>{
        showFormWorkspace.value = true;
}
const setShowFormWorkspace = (val) =>{
        showFormWorkspace.value  = val;
}
const handleAddWorkspaceValidation = (obj) =>{
    reactiveDataGlobal.addWorkspace(obj)
    showFormWorkspace.value = false;
}
const popupContextShowed = ref(false);
const contextualSelectedTask = ref(null)
const setpopupContextShowed = (value)=>{
    popupContextShowed.value = value
}
const handleContextualButtonClick = (yesno) =>{
    popupContextShowed.value = false;
    if(yesno == "yes"){
        //console.log( reactiveDataGlobal.workspaces.find(x => x.id == currentlySelectedWorkspace ) )
        reactiveDataGlobal.workspaces.find(x => x.id == currentlySelectedWorkspace.value).removeTask(contextualSelectedTask.value.id)
    }
}
const reactiveContextMenu = (e,task) =>{
    e.preventDefault();
    console.log(task);
    popupContextShowed.value = true;
    contextualSelectedTask.value = task;
}
const tempTask = ref({})
const showAddTaskForm = ref(false);
const setShowAddTaskForm = (val) =>{
    showAddTaskForm.value = val
}
const handleClickAddTaskButton = (status) =>{
    tempTask.value.state =  status
    showAddTaskForm.value = true;
}
const handleAddTaskFormValidation = (obj) =>{
    const state = tempTask.value.state
    const id = Math.max(...[0,...(reactiveDataGlobal.workspaces.find(x => x.id == currentlySelectedWorkspace.value ).taskList).map(e =>e.id)]) - -1
    tempTask.value = {...obj}
    tempTask.value.id = id
    tempTask.value.state = state
    reactiveDataGlobal.workspaces.find(x => x.id == currentlySelectedWorkspace.value ).addTask(tempTask.value)
    console.log(reactiveDataGlobal.workspaces.find(x => x.id == currentlySelectedWorkspace.value ))
    tempTask.value = {}
    showAddTaskForm.value = false;
}
const currentlyEditedTask = ref(null)

const showEditTaskPopup = ref(false)

const setShowEditTaskPopup = (val) =>{
    showEditTaskPopup.value = val
}
const handleEditFormValidation = (id,newTaskDatas) =>{
    forwhenEdited.value = forwhenEdited.value+1
    reactiveDataGlobal.workspaces.find(x => x.id == currentlySelectedWorkspace.value ).editTask(id,newTaskDatas)
}
const handleClickTask = (task) =>{
    currentlyEditedTask.value = task
    showEditTaskPopup.value = true
}
</script>
<template>
    <div class="september-wrapper" :key="'workspace-'+ currentlySelectedWorkspace">
        <PopupComp :key="'contextual-popup-for-'+ currentlySelectedWorkspace  + '-' + contextualSelectedTask?.id" :title="'Supprimer '+ contextualSelectedTask?.name +'?'" :editable="false" :show="popupContextShowed" :set-show="setpopupContextShowed">
            <template #content>
                <v-btn @click="handleContextualButtonClick('no')">Non</v-btn>
                <v-btn @click="handleContextualButtonClick('yes')" class="bg-accentuated-surface">Oui</v-btn>
            </template>
        </PopupComp>
        <AddWorkspacePopup :key="Math.max( ...(reactiveDataGlobal.workspaces.map(e => e.id)) ) - -1" :add-workspace="handleAddWorkspaceValidation" :show="showFormWorkspace" :set-show="setShowFormWorkspace"></AddWorkspacePopup>
        <AddTaskPopup :key="Math.max(...[0,...(reactiveDataGlobal.workspaces.find(x => x.id == currentlySelectedWorkspace).taskList.map(e =>e.id))]) - -1" :add-task="handleAddTaskFormValidation" :show="showAddTaskForm" :set-show="setShowAddTaskForm"></AddTaskPopup>
        <EditTaskPopup :key="'editing' + currentlyEditedTask" :edit-task="handleEditFormValidation" :show="showEditTaskPopup" :set-show="setShowEditTaskPopup" :task="currentlyEditedTask"></EditTaskPopup>
        <AppBar :workspaces="reactiveDataGlobal.workspaces" :add-workspace="handleBtnAppBarAdd" :remove-workspace="reactiveDataGlobal.removeWorkspace" :currently-selected-workspace="currentlySelectedWorkspace" :setCurrentlySelectedWorkspace="setCurrentlySelectedWorkspace"></AppBar>
        <TaskList :key="forwhenEdited" class="take-remaining-space-and-scroll" :handleClickTask="handleClickTask" :handleButtonClick="handleClickAddTaskButton" :workspace="reactiveDataGlobal.workspaces.find(x => x.id == currentlySelectedWorkspace )" :task-context-menu-handler="reactiveContextMenu" ></TaskList>
    </div>
</template>
<style scoped>
.september-wrapper{
    height: 100vh;
    display: flex;
    flex-flow: column;
}
.take-remaining-space-and-scroll{
    flex: 1 1 auto;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>