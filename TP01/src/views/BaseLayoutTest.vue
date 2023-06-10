<script setup>
import AppBarTest from './AppBarTest.vue'
import TaskListTest  from './TaskListTest.vue'
</script>

<template>
        <div class="basic-layout-wrapper">
            <AppBarTest></AppBarTest>
            <TaskListTest ></TaskListTest>
        </div>
</template>
<style scoped>
.basic-layout-wrapper{
    max-height: 100vh;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: flex-start;
    align-items: stretch;
}
</style>