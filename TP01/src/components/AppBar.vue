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

<script>

export default {
    methods: {
        getId(payload) {
            this.id = payload.id
        }
    }
}
</script>

<template>
    <v-tool-bar class="bg-surface d-flex">
        <!-- Navigation space-->
        <v-row class="d-flex justify-center align-center">
            <v-col cols="12" md="11" class="d-flex justify-center align-center">
                <v-sheet class="mx-auto" max-width="100vw">
                    <v-slide-group show-arrows>
                        <v-slide-group-item v-for="item in items" :key="item.id">
                            <Workspace :id="item.id" :name="item.name" :icon="item.icon" :iconColor="item.iconColor" @delete-item="deleteItem(item.id)">
                            </Workspace>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
            <v-col cols="12" md="1" class="d-flex justify-md-end justify-center align-center mb-3 mt-3">
                <v-btn @click="addItem()" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
            </v-col>
        </v-row>
    </v-tool-bar>
</template>
