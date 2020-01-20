<template>
  <div class="game-setup--wrapper d-flex justify-center align-center">
    <v-form v-model="settingsForm" lazy-validation ref="settingsForm">
      <v-text-field
        v-model="playerName"
        name="playerName"
        label="Player Name"
        id="playerNameId"
        type="text"
        :rules="required"
      ></v-text-field>
      <v-text-field
        v-model="roomName"
        name="roomName"
        label="Room Name"
        id="roomNameId"
        type="text"
        :rules="required"
      ></v-text-field>

      <CreateLinksButton
        :enableButton="!settingsForm"
        :redirectTo="'/settings/link-setup'"
        :storeMutations="mutations"
      />
      <div>{{ this.$store.roomName }}</div>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CreateLinksButton from "@/components/CreateLinksButton.vue";
// import { DealCards } from "../services/DealCards.js";

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
  components: {
    CreateLinksButton
  },
  mixins: [Deck],
  data() {
    return {
      settingsForm: true,
      playerName: "doru",
      roomName: "kingPinDen",
      required: [v => !!v || "This field is required"]
    };
  },
  computed: {
    mutations() {
      return [
        {
          type: "setRoomName",
          value: {
            roomName: this.roomName
          }
        },
        {
          type: "setPlayerName",
          value: { playerName: this.playerName, playerNo: 1 }
        }
      ];
    }
  }
  // mounted() {
  //   console.log(DealCards(this.setDeck("all")));
  // }
});
</script>

<style lang="scss" scoped>
.game-setup {
  &--wrapper {
    height: 80vh;
  }
}
</style>
