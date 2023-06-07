<template>
    <TaskList :workspace="workspace" :editTaskHandler="editTaskHandler" />
</template>

<script setup>
import TaskList from './TaskList.vue';

let workspace = {
    id: 1,
    name: "Workspace 1",
    icon: "icon",
    iconColor: "color",
    taskList: [
        { id: 1, name: 'Task 1', state: 'to-do', description: 'Description 1', date: '2023-06-01', notif: true, whenNotif: '2023-06-01', priority: 'High', taskType: 'Work' },
        { id: 2, name: 'Task 2', state: 'doing', description: 'Description 2', date: '2023-06-02', notif: false, whenNotif: '2023-06-02', priority: 'Low', taskType: 'Personal' },
        { id: 3, name: 'Task 3', state: 'done', description: 'Description 3', date: '2023-06-03', notif: true, whenNotif: '2023-06-03', priority: 'Medium', taskType: 'Work' }
    ],
    addTask: function(task) {
        this.taskList.push(task);
    },
};
const editTaskHandler = (id, newDatas) => {
    console.log(id, newDatas);
};
</script>
