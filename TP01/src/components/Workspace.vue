<script setup>
const props = defineProps(['iconColor', 'icon', 'name', 'id'])
</script>

<script>
export default {
    methods: {
        emitCustomEvent() {
            this.$emit('delete-item', this.id)
        }
    }
}
</script>

<template>
    <div class="pa-2 rounded-lg">
        <v-container class="d-flex flex-wrap align-center rounded-lg bg-primary pa-2">
            <div class="pa-2 rounded-lg" :style="{ backgroundColor: iconColor }"><v-icon color="white">{{ icon
            }}</v-icon></div>
            <div class="px-10"> {{ name }}</div>
            <v-btn @click="emitCustomEvent" size=small class="justify-center rounded-lg bg-surface" elevation="3"
                icon="mdi-trash-can-outline"></v-btn>
        </v-container>
    </div>
</template>