<script setup>
import { defineProps } from "vue";
import Workspace from './Workspace.vue';

const props = defineProps({
    workspaces: Array,
    addWorkspace: Function,
    removeWorkspace: Function,
    currentlySelectedWorkspace:Number,
    setCurrentlySelectedWorkspace:Function
})

function addItem() {
    props.addWorkspace();
}

function deleteItem(id) {
    props.removeWorkspace(id);
}
</script>

<template>
    <div class="september-toolbar bg-surface d-flex">
        <!-- Navigation space-->
        <v-row no-gutters class="flex-row d-flex flex-wrap flex-md-nowrap justify-center align-center">
            <div class="flex-grow-1 d-flex justify-start align-center">
                <v-sheet :class="$vuetify.display.mdAndUp ? 'omd' : 'umd'">
                    <v-slide-group show-arrows>
                        <v-slide-group-item v-for="item in props.workspaces" :key="item.id">
                            <Workspace @select-item="setCurrentlySelectedWorkspace" :selected=" props.currentlySelectedWorkspace == item.id" :id="item.id" :name="item.name" :icon="item.icon" :iconColor="item.iconColor" @delete-item="deleteItem(item.id)"></Workspace>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>
            <div class="d-flex justify-center button-wrapper pa-4">
                <v-btn @click="addItem()" icon="mdi-plus" class="drop-shadow justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </div>
        </v-row>
    </div>
</template>

<style scoped>
.umd{
    max-width: 100vw;
}
.omd{
    max-width: 90vw;
}
.button-wrapper{
    min-width: 10vw;
}
</style>
