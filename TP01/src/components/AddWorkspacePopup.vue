<script setup>
    import PopupComp from './PopupComp.vue';
    import AddWorkspace from './AddWorkspace.vue';
    const edit = false;
    const props = defineProps({
        addWorkspace:Function,
        show:Boolean,
        setShow: Function,
    })
    const handleFormValidation = (object) =>{
        object.taskList=  [];
        props.addWorkspace(object)
    }
</script>
<template>
    <PopupComp :show="props.show" :setShow="setShow" :editable="edit" title="Nouveau Workspace">
        <template #content>
            <AddWorkspace :addWorkspace="handleFormValidation">  
            </AddWorkspace>
        </template>
    </PopupComp>
</template>