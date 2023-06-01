<script setup>
import { ref, defineProps } from "vue";

let items = ref([]);

function addItem() {
    const newItem = {
        id: Math.random().toString(36).substr(2, 9), // Génération d'un ID unique
        name: "Item " + (this.items.length + 1),
        icon: "mdi-vuetify",
        iconColor: "red"
    };
    this.items.push(newItem);
}

function deleteItem(id) {
    this.items = this.items.filter(item => item.id !== id);
}

/*defineProps({
  workspaces: Array,
  click_Button: Function
})*/

</script>

<template>
    <!--Le tag fixed ne marche pas, obligé d'appliquer du CSS-->
    <v-app-bar app style="position:fixed" class="flex-column"> 
        <!-- Navigation space-->
        <v-col cols="11" class="d-flex justify-center align-center">
            <v-sheet class="mx-auto" max-width="100vw">
                <v-slide-group show-arrows>
                    <v-slide-group-item v-for="item in items" :key="item.id">
                        <div class="pa-2 rounded-lg">
                            <v-container class="d-flex flex-wrap align-center rounded-lg bg-primary pa-2">
                                <div class="pa-2 rounded-lg" :style="{ backgroundColor: item.iconColor }"><v-icon
                                        color="white">{{ item.icon }}</v-icon></div>
                                <div class="px-10"> {{ item.name }}</div>
                                <v-btn @click="deleteItem(item.id)" size=small class="justify-center rounded-lg bg-surface" elevation="3"
                                    icon="mdi-trash-can-outline"></v-btn>
                            </v-container>
                        </div>
                    </v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </v-col>
        <!--Add button-->
        <v-col cols="1" class="d-flex justify-end align-center">
            <v-btn @click="addItem()" icon="mdi-plus" class="justify-center bg-accentuated-surface rounded-lg"></v-btn>
        </v-col>
    </v-app-bar>
</template>

