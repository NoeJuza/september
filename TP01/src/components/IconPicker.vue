<script setup>
    import { reactive } from "vue";
    const props = defineProps({
        currentlySelected:String,
        updateCurrentlySelected: Function
    });
    console.log(props.currentlySelected)
    import icons from "../allIcons.json";
    const currentElts = reactive({elts: [...icons].splice(0,1000)})
    console.log(currentElts.elts.length)
    //console.log(currentElts.value)
    const scrollBhvr = (e) =>{
        console.log(Math.abs(e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop) < 1 && currentElts.elts.length < icons.length)
        if(Math.abs(e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop) < 1 && currentElts.elts.length < icons.length){
            let destIndex = currentElts.elts.length + 500;
            destIndex = destIndex >= icons.length ? icons.length : destIndex
            currentElts.elts.push(...([...icons].splice(currentElts.elts.length, destIndex )))
            console.log(currentElts.elts.length)
        }
    }
    const computeColor = (item) =>{
        return item === props.currentlySelected ? "surface" : ""
    }
    const computeClass = (item) =>{
        return item === props.currentlySelected ? "bg-accentuated-surface rounded pa-1" : "rounded pa-1"
    }
    const saveIcon = (item) =>{
        props.updateCurrentlySelected(item)
    }
</script>

<template>
    <v-sheet
    @scroll="(e) =>scrollBhvr(e)"
    max-height="inherit"
    class="overflow-y-auto rounded-lg">
        <v-col cols="12" no-gutters class="">
            <div
            v-for="(item, i) in currentElts.elts"
            :key="i"
            color="surface"
            class="pa-1 d-inline"
            cols="1"
            >
                <v-icon :class="computeClass(item)" :color="computeColor(item)" @click="saveIcon(item)"> {{ item }} </v-icon>
            </div>
        </v-col>
    </v-sheet>
</template>