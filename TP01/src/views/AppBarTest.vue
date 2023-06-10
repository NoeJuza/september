<script setup>
import { reactive } from 'vue'
import AppBar from '../components/AppBar.vue'
const workspaces = reactive([
        {id:1,name:"Home",icon:"",iconColor:"",taskList:[], addTask: ()=>{}, removeTask: ()=>{}}
])

</script>

<template>
        <AppBar :workspaces="workspaces" :add-workspace="addWorspace" :remove-workspace="removeWorkspace"></AppBar>
</template>