<script setup>
import { ref } from "vue";
import Workspace from './Workspace.vue';

let items = ref([]);

function addItem() {
    const newItem = {
        id: Math.random().toString(36).substr(2, 9), // Génération d'un ID unique
        name: "Item " + (this.items.length + 1),
        icon: "mdi-vuetify",
        iconColor: "red",
    };
    this.items.push(newItem);
}

function deleteItem(id) {
    this.items = this.items.filter(item => item.id !== id);
}
</script>

<template>
    <div class="september-toolbar bg-surface d-flex">
        <!-- Navigation space-->
        <v-row no-gutters class="flex-row d-flex flex-wrap flex-md-nowrap justify-center align-center">
            <div class="flex-grow-1 d-flex justify-start align-center">
                <v-sheet :class="$vuetify.display.mdAndUp ? 'omd' : 'umd'">
                    <v-slide-group show-arrows>
                        <v-slide-group-item v-for="item in items" :key="item.id">
                            <Workspace :id="item.id" :name="item.name" :icon="item.icon" :iconColor="item.iconColor" @delete-item="deleteItem(item.id)">
                            </Workspace>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>
            <div class="d-flex justify-center button-wrapper pa-4">
                <v-btn @click="addItem()" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </div>
        </v-row>
    </div>
</template>
<style scoped>
.september-toolbar{
    min-height: 64px;
}
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
