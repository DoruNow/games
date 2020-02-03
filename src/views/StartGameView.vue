<template>
  <v-app>
    <Header />
    <v-content>
      <StartGame />
      <JoinGame />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";
import StartGame from "../components/StartGame.vue";
import JoinGame from "../components/JoinGame.vue";

export default Vue.extend({
  components: {
    Header,
    StartGame,
    JoinGame
  }
});
</script>

<style scoped></style>
