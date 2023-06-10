<script setup>
import { reactive, ref } from 'vue'
import AppBar from '../components/AppBar.vue'
import AddWorkspacePopup from '../components/AddWorkspacePopup.vue'
const simObj = reactive({workspaces:[
        {id:1,name:"Home",icon:"mdi-death-star-variant",iconColor:"#FF0000",taskList:[], addTask: ()=>{}, removeTask: ()=>{}},
]})
const addWorkspace = (incompleteDatas) =>{
        const nextIndex = Math.max( ...(simObj.workspaces.map(e =>e.id)) ) - -1;
        incompleteDatas.id = nextIndex;
        simObj.workspaces.push(incompleteDatas);
        showFormWorkspace.value = false;
}
const removeWorkspace = (id) =>{
        if (simObj.workspaces.length >1) simObj.workspaces = simObj.workspaces.filter(x => x.id != id);
}
const currentlySelectedWorkspace = ref(1);
const setCurrentlySelectedWorkspace = (val) =>{
        currentlySelectedWorkspace.value = val;
        console.log(currentlySelectedWorkspace.value)
}
const handleBtnAppBarAdd = () =>{
        showFormWorkspace.value = true;
}
const showFormWorkspace = ref(false);
const setShowFormWorkspace = (val) =>{
        showFormWorkspace.value  = val;
}
</script>

<template>
        <div class="appbartest-wrapper">
                <AddWorkspacePopup :key="Math.max( ...(simObj.workspaces.map(e =>e.id)) ) - -1" :add-workspace="addWorkspace" :show="showFormWorkspace" :set-show="setShowFormWorkspace"></AddWorkspacePopup>
                <AppBar :workspaces="simObj.workspaces" :add-workspace="handleBtnAppBarAdd" :remove-workspace="removeWorkspace" :currently-selected-workspace="currentlySelectedWorkspace" :setCurrentlySelectedWorkspace="setCurrentlySelectedWorkspace"></AppBar>
        </div>
</template>