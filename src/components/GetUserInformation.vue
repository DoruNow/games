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
          type="text"
          @keydown.space.prevent
          :rules="required"
        ></v-text-field>
        <v-text-field
          v-if="displayWhich.roomName"
          v-model="roomName"
          name="roomName"
          label="Room Name"
          type="text"
          @keydown.space.prevent
          :rules="required"
        ></v-text-field>
        <v-select
          v-if="displayWhich.selectPlayer"
          v-model="select"
          :items="playerSelection"
          label="Select Player"
          item-value="value"
        ></v-select>
        <v-btn :disabled="!settingsForm" color="success" @click="createLinks"
          >Create Links</v-btn
        >
        {{ select }}
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
    menuCardButtonText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showForm: false,
      settingsForm: null,
      playerName: "Doru",
      roomName: "KingPin",
      select: { value: null },
      playerSelection: [
        { text: "Player 2", value: 2 },
        { text: "Player 3", value: 3 },
        { text: "Player 4", value: 4 }
      ],
      required: [v => !!v || "Required field"],
      settings: {
        roomName: String
      }
    };
  },
  methods: {
    createLinks() {
      this.updateStore();
      this.$router.push({
        path: `/settings/link-setup/${this.playerName}/${this.roomName}/${this.select}`
      });
    },
    updateStore() {
      this.settings.roomName = this.roomName;
      this.settings.playerName = this.playerName;
      this.settings.playerNo = this.select;

      this.$store.commit({
        type: "setGameSettings",
        value: this.settings
      });
    }
  },
  mounted() {
    if (this.displayWhich.selectPlayer === false) {
      this.select = 1;
    }
  }
});
</script>

<style scoped></style>
