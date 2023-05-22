<template>
    <v-container>
        <button @click="clickHandler">Show popup</button>
        <Popup :title="title" :show="showPopup" :setShow="setShow" :editable="editable" :setTitle="setTitle">
            <template #content>
                <v-container no-gutters>
                    <p>Test fonctionnel</p>
                </v-container>
            </template>
        </Popup>
    </v-container>
</template>

<script setup>
import { defineComponent, ref } from 'vue';
import Popup from '../components/PopupComp.vue';
const editable = true;
const showPopup = ref(false);
const title = ref("Pourquoi être raciste? le nouveau roman choc d'Adrien Sauthier");
const clickHandler = () =>{
    showPopup.value = true;
}
const setShow = (value)=>{
    showPopup.value = value
}
const setTitle = (value)=>{
    title.value = value
}

defineComponent({
    name: 'PopupTest',
    components:{
        Popup
    }
})
</script>

<style>

</style>