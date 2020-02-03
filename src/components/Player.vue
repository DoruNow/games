<template>
  <div>
    <v-btn
      large
      color="primary-title"
      v-if="displayStartGameButton"
      @click="startGame"
      >Deal cards</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { ShuffleDeck } from "../services/ShuffleDeck.ts";

export default Vue.extend({
  data() {
    return {
      displayStartGameButton: false
    };
  },
  mounted() {
    if (this.$route.params.playerNo === "1") {
      this.displayStartGameButton = true;
    }
  },
  methods: {
    startGame() {
      const ShuffleDeckService = new ShuffleDeck();
      ShuffleDeckService.shuffleDeck();
    }
  }
});
</script>

<style scoped></style>
