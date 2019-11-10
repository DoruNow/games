<template>
  <v-app>
    <Header />
    <v-content>
      <StartGame />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header";
import StartGame from "../components/StartGame";

export default Vue.extend({
  components: {
    Header,
    StartGame
  }
});
</script>

<style scoped></style>
