<script setup>
    import { ref } from 'vue';
    import PopupComp from './PopupComp.vue';
    import AddTask from './AddTask.vue';
    const taskName = ref("Nouvelle Tâche");
    const edit = true;
    const setTaskName = (val) =>{
        taskName.value = val
    }
    const props = defineProps({
        addTask:Function,
        show:Boolean,
        setShow: Function,
        stateToBeCreatedIn: String
    })
    const handleFormValidation = (object) =>{
        object.name = taskName.value;
        object.state = props.stateToBeCreatedIn;
        props.addTask(object)
    }
</script>
<template>
    <PopupComp :show="props.show" :setShow="setShow" :editable="edit" :title="taskName" :setTitle="setTaskName">
        <template #content>
            <AddTask :addTask="handleFormValidation">  
            </AddTask>
        </template>
    </PopupComp>
</template>