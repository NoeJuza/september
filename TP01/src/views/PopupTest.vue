<template>
    <v-container no-gutters class="ma-0">
        <button @click="clickHandler">Show popup</button>
        <Popup :title="title" :show="showPopup" :setShow="setShow" :editable="editable" :setTitle="setTitle">
            <template #content>
                <v-container no-gutters class="ma-0">
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
const title = ref("Ma superbe tâche avec un titre super long genre vraiment vraiment vraiment long");
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