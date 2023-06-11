<script setup>
const props = defineProps(['iconColor', 'icon', 'name', 'id', 'selected'])
const emit = defineEmits(['delete-item','select-item'])
</script>


<template>
    <div class="pa-2 rounded-lg">
        <v-container class="d-flex flex-wrap align-center rounded-lg bg-primary pa-2">
            <div @click="emit('select-item',props.id)" class="pa-2 rounded-lg clickable" :style="{ backgroundColor: props.iconColor }">
                <v-icon color="white">{{ props.icon}}</v-icon>
            </div>
            <div  @click="emit('select-item',props.id)" class="px-10 clickable" :class="props.selected ? 'selected' : ''"> 
                {{ props.name }}
            </div>
            <v-btn @click="emit('delete-item',props.id);" size=small class="justify-center rounded-lg bg-surface" elevation="3"
                icon="mdi-trash-can-outline"></v-btn>
        </v-container>
    </div>
</template>
<style scoped>
.selected{
    font-weight: bolder;
    text-decoration: underline;
}
</style>