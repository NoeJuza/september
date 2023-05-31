<script setup>
    import { ref } from 'vue';
    import PopupComp from './PopupComp.vue';
    import EditTask from './EditTask.vue';
    
    const edit = true;
    const props = defineProps({
        task:Object,
        addTask:Function,
        show:Boolean,
        setShow: Function,
        editTask: Function,
    })
    const taskName = ref(props.task.name);
    const setTaskName = (val) =>{
        taskName.value = val
        let virtualObj = {...props.task}
        virtualObj.name = val
        props.editTask(virtualObj.id,virtualObj)
    }
    const handleTaskEdit = (id,object) =>{
        object.name = taskName.value;
        props.editTask(id,object)
    }

</script>
<template>
    <PopupComp :show="props.show" :setShow="props.setShow" :editable="edit" :title="taskName" :setTitle="setTaskName">
        <template #content>
            <EditTask :task="props.task" :edit-task="handleTaskEdit"></EditTask>
        </template>
    </PopupComp>
</template>