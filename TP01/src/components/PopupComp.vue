<script setup>
import { defineProps, ref } from 'vue'

const container = ref(null);
const titleContainer = ref(null);
const props = defineProps({
    title:String,
    show:{
        type:Boolean,
        default:false
    },
    setShow:Function,
    editable:{
        type:Boolean,
        default:false
    },
    setTitle:Function
})
console.log(props.editable)
const handleClickPencil = () =>{
    titleContainer.value.focus();
}
const handleTitleEdit = () =>{
    props.setTitle(titleContainer.value.innerText);
    titleContainer.value.innerText = props.title.length < 45 ? props.title : props.title.substring(0,45) + "..."
}
const handleTitleFocus = () =>{
    titleContainer.value.innerText = props.title
}
</script>

<template>
    <div ref="container" class="popup-displayer" v-show="props.show" @click="()=>{}">
        <div class="popup-side" @click="()=>{setShow(false)}">
        </div>
        <div class="popup-inner-container">
            <div class="popup-side" @click="()=>{setShow(false)}" ></div>
            <v-container class="bg-background popup-inner">
                <div class="popupHeader">
                    <div class="title-bar">
                        <div class="center-content">
                            <h3 class="breaks" ref="titleContainer" :contenteditable="props.editable" @focusout="handleTitleEdit" @focusin="handleTitleFocus">{{props.title.length < 45 ? props.title : props.title.substring(0,45) + "..."}}</h3>
                        </div>
                        <div v-show="props.editable" class="center-content">
                            <v-icon icon="mdi-pencil-outline" @click="handleClickPencil" ></v-icon>
                        </div>
                    </div>
                    <div class="center-content">
                        <v-icon @click="()=>{setShow(false)}" icon="mdi-close-box-outline"></v-icon >
                    </div>
                </div>
                <v-row>
                    <slot name="content"></slot>
                </v-row>
            </v-container>
            <div class="popup-side" @click="()=>{setShow(false)}"></div>
        </div>
        <div class="popup-side" @click="()=>{setShow(false)}">

        </div>
    </div>
</template>


<style scoped>
    .popup-displayer{
        background-color: #00000010; /*darkens what is behind*/
        position: absolute; 
        top: 0;
        left: 0;
        display: flex;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
    }
    .popup-side{
        flex-grow: 1;
        cursor: pointer;
    }
    .popup-inner-container{
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: stretch;
    }
    .popup-inner{
        max-height: 80vh;
        max-width: 90vw;
        gap: 2vh;
        overflow-y: scroll;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 1px gray;
        /*hide scrollbar*/
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        align-items: stretch;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .popup-inner::-webkit-scrollbar {
      display: none;
    }
    .title-bar{
        display: flex;
        overflow-wrap: anywhere;
    }
    .center-content{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
    .popupHeader{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .breaks{
        overflow-wrap: anywhere;
    }
</style>