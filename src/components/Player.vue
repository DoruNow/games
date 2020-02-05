<template>
  <div>
    <v-btn
      large
      color="primary-title"
      v-if="displayStartGameButton"
      @click="startGame"
      >Deal cards</v-btn
    >
    <v-btn
      large
      color="primary-title"
      v-if="displayStartGameButton"
      @click="show1"
      >Show player 1 cards</v-btn
    >
    <p v-if="this.cards">{{ cards[playerIndex] }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { ShuffleDeck } from "../services/ShuffleDeck.ts";

export default Vue.extend({
  data() {
    return {
      displayStartGameButton: false,
      cards: null,
      playerIndex: null
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
      let payload = {
        cardsInHands: ShuffleDeckService.shuffleDeck()
      };
      this.$store.commit({ type: "setGameState", value: payload });
    },
    show1() {
      this.cards = this.$store.state.gameState.cardsInHands;
      this.playerIndex = this.$route.params.playerNo;
    }
  }
});
</script>

<style scoped></style>
