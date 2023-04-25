<template>
    <v-container>
        {{this.title}}
    </v-container>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        title:String
    }
})
</script>
