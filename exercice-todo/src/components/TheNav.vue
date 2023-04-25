<template>
    <v-container class="nav">
        <router-link to="/" >Home</router-link>
        <router-link to="/todo" >Todo</router-link>
        <router-link to="/about" >About</router-link>
    </v-container>
</template>
<style>
.nav{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: stretch;
}
</style>