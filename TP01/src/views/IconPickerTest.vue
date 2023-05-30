<template>
    <v-container>
        <p>{{valueIcon}}</p>
        <div class="arbitrary-size">
            <IconPicker :currentlySelected="valueIcon" :updateCurrentlySelected="updateIcon"/>
        </div>
    </v-container>
</template>
<script setup>
import { defineComponent, ref } from "vue";
import IconPicker from "../components/IconPicker.vue";

const valueIcon = ref("");
const updateIcon = (value) => {
    valueIcon.value = value;
};

console.log("test");
defineComponent({
    name:"IconPickerTest",
    components:{
        IconPicker
    }
})
</script>
<style>
.arbitrary-size{
    max-height: 300px;
}
</style>