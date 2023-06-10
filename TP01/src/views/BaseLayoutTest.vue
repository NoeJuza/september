<script setup>
import AppBarTest from './AppBarTest.vue'
import TaskListTest  from './TaskListTest.vue'
</script>

<template>
        <div class="basic-layout-wrapper">
            <AppBarTest></AppBarTest>
            <TaskListTest class="tkt"></TaskListTest>
        </div>
</template>
<style scoped>
.basic-layout-wrapper{
    height: 100vh;
    display: flex;
    flex-flow: column;
}
.tkt{
    flex: 1 1 auto;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>