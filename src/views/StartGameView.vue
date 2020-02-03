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
// @ts-ignore
import { ShuffleDeck } from "../services/ShuffleDeck.ts";

export default Vue.extend({
  components: {
    Header,
    StartGame,
    JoinGame
  },
  mounted() {
    const ShuffleDeckService = new ShuffleDeck();
    ShuffleDeckService.shuffleDeck();
  }
});
</script>

<style scoped></style>
