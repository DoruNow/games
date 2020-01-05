<template>
  <div class="game-setup--wrapper d-flex justify-center align-center">
    <v-form v-model="settingsForm" lazy-validation ref="settingsForm">
      <v-text-field
        v-model="name"
        name="name"
        label="Player Name"
        id="playerNameId"
        type="text"
        :rules="required"
      ></v-text-field>
      <v-text-field
        v-model="personalPin"
        type="number"
        name="personalPin"
        label="PIN"
        id="personalPinId"
        :counter="6"
        :rules="pinRules"
      ></v-text-field>
      <v-text-field
        v-model="roomName"
        name="roomName"
        label="Room Name"
        id="roomNameId"
        type="text"
        :rules="required"
      ></v-text-field>
      <v-radio-group v-model="totalNumberOfPlayers">
        <v-radio label="4 Players" value="4"></v-radio>
        <v-radio label="2 Players" value="2"></v-radio>
      </v-radio-group>
      <v-checkbox
        label="Play Clockwise"
        v-model="clockwiseDirection"
        value="false"
      ></v-checkbox>
      <v-text-field
        v-model="deckSize"
        type="number"
        name="deckSize"
        label="Deck Size"
        id="deckSizeId"
      ></v-text-field>

      <v-btn
        :disabled="!settingsForm"
        color="success"
        class="mr-4"
        @click="validate"
        >Start Game</v-btn
      >
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DealCards } from "../services/DealCards.js";

const Deck = {
  methods: {
    setDeck(selectedRange) {
      let skip;
      switch (selectedRange) {
        case "all":
          skip = 0;
          break;
        case "sevenAndUp":
          skip = 6;
          break;

        default:
          0;
          break;
      }
      return this.buildDeck(skip);
    },
    buildDeck(skip) {
      const cardTypes = ["Spades", "Hearts", "Diamonds", "Clubs"];
      let deck = [];
      cardTypes.forEach(type => {
        [...Array(14).keys()].forEach(element => {
          // skipping 0 avoids confusion when mapping the cards
          if (element === 0 || (skip > 0 && element <= skip)) {
            return;
          }
          deck.push({ type, element });
        });
      });
      return deck;
    }
  }
};

export default Vue.extend({
  mixins: [Deck],
  data() {
    return {
      settingsForm: true,
      name: "",
      totalNumberOfPlayers: "4",
      clockwiseDirection: false,
      deckSize: 52,
      roomName: "",
      personalPin: "",
      pinRules: [
        v =>
          (v && 4 <= v.length && v.length <= 6) ||
          "Pin must be between 4 and 6 digits"
      ],
      required: [v => !!v || "This field is required"]
    };
  },
  methods: {
    validate() {
      if (this.$refs.settingsForm.validate()) {
        // push to generated URL's
      }
    }
  },
  mounted() {
    console.log(DealCards(this.setDeck("all")));
  }
});
</script>

<style lang="scss" scoped>
.game-setup {
  &--wrapper {
    height: 80vh;
  }
}
</style>
