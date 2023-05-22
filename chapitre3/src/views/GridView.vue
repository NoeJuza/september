<template>
    <v-row no-gutters>
        <v-col
        align="center"
        justify="center"
        class="bg-indigo-lighten-4"
        style="border: 1px solid indigo"
        v-for="n in 8"
        :key="n"
        cols="12"
        md="6"
        lg="3"
        >
            <span>{{n}}</span>
        </v-col>
    </v-row>
</template>