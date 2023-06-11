<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
.drop-shadow{
    box-shadow: 0px 3px 5px 2px gray !important;
}
.clickable {
    cursor: pointer;
}
</style>