<template>
  <div class="d-flex justify-center align-center flex-column">
    <v-card color="#eef" class="ma-3">
      <v-btn class="ma-2" color="success" @click="showForm = !showForm" large>{{
        menuCardButtonText
      }}</v-btn>
      <v-form
        v-show="showForm"
        v-model="settingsForm"
        lazy-validation
        ref="settingsForm"
        class="pa-2"
      >
        <v-text-field
          v-if="displayWhich.playerName"
          v-model="playerName"
          name="playerName"
          label="Player Name"
          id="playerNameId"
          type="text"
          :rules="required"
        ></v-text-field>
        <v-text-field
          v-if="displayWhich.roomName"
          v-model="roomName"
          name="roomName"
          label="Room Name"
          id="roomNameId"
          type="text"
          :rules="required"
        ></v-text-field>
        <v-select
          v-if="displayWhich.selectPlayer"
          :items="playerSelection"
          label="Select Player"
          solo
        ></v-select>
        <v-btn :disabled="!settingsForm" color="success" @click="createLinks"
          >Create Links</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    displayWhich: {
      type: Object
    },
    selectItems: {
      type: Array
    },
    storeMutations: {
      type: Array
    },
    menuCardButtonText: {
      type: String,
      default: ""
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {
      showForm: false,
      settingsForm: null,
      playerName: "Doru",
      roomName: "KingPin Cool kid",
      playerSelection: [
        { text: "Player 2", value: 2 },
        { text: "Player 3", value: 3 },
        { text: "Player 4", value: 4 }
      ],
      required: [v => !!v || "Required field"]
    };
  },
  methods: {
    createLinks() {
      this.storeMutations.forEach(mutation => {
        console.log(mutation);
        this.$store.commit({
          type: mutation.type,
          value: mutation.value
        });
        this.$router.push({
          path: `/settings/link-setup/${this.playerName}/${this.roomName}/${this.playerSelection.value}`
        });
      });
    },
    updateStore() {
      this.$store.commit({
        type: "gameSettings",
        value: this.gameSettings
      });
    }
  },
  mounted() {
    if (this.displayWhich.selectPlayer === false) {
      this.playerSelection = { text: "Player 1", value: 1 };
    }
  },
  computed: {
    gameSettings() {
      let playerNo = "player" + this.playerSelection.value;
      return {
        roomName: this.roomName,
        playerNo: this.playerName
      };
    }
  }
});
</script>

<style scoped></style>
