<template>
    <v-container>
        <button @click="clickHandler">Show popup</button>
        <Popup title="Oeeeeeeeeeeeee" :show="showPopup" :setShow="setShow">
            <template #content>
                <v-container>
                    <p>Test fonctionnel</p>
                </v-container>
            </template>
        </Popup>
    </v-container>
</template>

<script setup>
import { defineComponent, ref } from 'vue';
import Popup from '../components/PopupComp.vue';
const showPopup = ref(false);
const clickHandler = () =>{
    showPopup.value = true;
}
const setShow = (value)=>{
    showPopup.value = value
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