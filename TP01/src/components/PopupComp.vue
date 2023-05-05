<script setup>
import { defineProps, ref } from 'vue'

const container = ref();
const props = defineProps({
    title:String,
    show:{
        type:Boolean,
        default:false
    },
    setShow:Function
})
</script>

<template>
    <v-container :ref="container" class="popout-displayer" v-show="props.show" @click="()=>{}">
        <v-col>
        </v-col>
        <v-col cols="10">
            <v-container class="bg-background">
                <v-row>
                    <v-col cols="9">
                        <h3>{{props.title}}</h3>
                    </v-col>
                    <v-col cols="1">
                        <v-icon icon="mdi-pencil"></v-icon>
                    </v-col>
                    <v-col cols="1">
                        <v-icon @click="()=>{setShow(false)}" icon="mdi-close"></v-icon >
                    </v-col>
                </v-row>
                <v-row>
                    <slot name="content"></slot>
                </v-row>
            </v-container>
        </v-col>
        <v-col>

        </v-col>
        
    </v-container>
</template>


<style scoped>
    .popout-displayer{
        background-color: #00000024;;
        position: absolute; 
        top: 0;
        left: 0;
        display: flex;
        height: 100vh;
        width: 100vw;
    }
</style>