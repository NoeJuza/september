<script setup>
import { defineProps, onMounted, onUnmounted, ref } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';
const { mdAndUp } = useDisplay()
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
const MAXCHARS_TITLE =  ref(mdAndUp.value ? 80: 45);
const resize = ()=> {
    MAXCHARS_TITLE.value = mdAndUp.value ? 80: 45;
    titleContainer.value.innerText = props.title.length < MAXCHARS_TITLE.value ? props.title : props.title.substring(0,MAXCHARS_TITLE.value) + "..."
    //console.log(MAXCHARS_TITLE.value)
}
onMounted(() => {
  resize()
  window.addEventListener("resize", resize);
});

onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
const handleClickPencil = () =>{
    titleContainer.value.focus();
}
const handleTitleEdit = () =>{
    props.setTitle(titleContainer.value.innerText);
    titleContainer.value.innerText = props.title.length < MAXCHARS_TITLE.value ? props.title : props.title.substring(0,MAXCHARS_TITLE.value) + "..."
}
const handleTitleFocus = () =>{
    titleContainer.value.innerText = props.title
}
</script>

<template>
    <div ref="container" class="popup-displayer flex-row flex-nowrap align-content-center justify-content-center"  v-show="props.show" @click="()=>{}">
        <div class="popup-side flex-grow-1" @click="()=>{setShow(false)}">
        </div>
        <div class="popup-inner-container d-flex flex-column flex-nowrap align-content-center justify-content-center align-items-stretch">
            <div class="popup-side flex-grow-1"  @click="()=>{setShow(false)}" ></div>
            <v-container class="bg-background popup-inner d-flex flex-column justify-content-flex-start align-content-center flex-nowrap align-items-stretch">
                <div class="d-flex flex-row flex-nowrap justify-space-between align-center">
                    <div class="title-bar d-flex">
                        <div class="d-flex flex-column flex-nowrap align-content-center justify-center align-center">
                            <h3 class="breaks" ref="titleContainer" :contenteditable="props.editable" @focusout="handleTitleEdit" @focusin="handleTitleFocus">{{props.title.length < 45 ? props.title : props.title.substring(0,45) + "..."}}</h3>
                        </div>
                        <div v-show="props.editable" class="d-flex flex-column flex-nowrap align-content-center justify-center align-center">
                            <v-icon icon="mdi-pencil-outline" @click="handleClickPencil" ></v-icon>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-nowrap align-content-center justify-center align-center">
                        <v-icon @click="()=>{setShow(false)}" icon="mdi-close-box-outline"></v-icon >
                    </div>
                </div>
                <v-row>
                    <slot name="content"></slot>
                </v-row>
            </v-container>
            <div class="popup-side flex-grow-1" @click="()=>{setShow(false)}"></div>
        </div>
        <div class="popup-side flex-grow-1" @click="()=>{setShow(false)}">

        </div>
    </div>
</template>


<style scoped>
    .popup-displayer{
        background-color: #00000010; /*darkens what is behind*/
        position: absolute; 
        display: flex; /*needed because d-flex puts a !important that prevails on display:none of the show*/
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
    }
    .popup-side{
        cursor: pointer;
    }
    .popup-inner-container{
        flex-grow: 2;
    }
    .popup-inner{
        max-height: 80vh;
        max-width: 90vw;
        gap: 2vh;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 1px gray;
        overflow-y: scroll;
        /*hide scrollbar*/
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .popup-inner::-webkit-scrollbar {
      display: none;
    }
    .title-bar{
      overflow-wrap: anywhere;
    }
    .breaks{
        overflow-wrap: anywhere;
    }
</style>