<template>
  <v-card color="#eef" class="ma-3">
    <v-btn
      class="ma-2 d-flex"
      color="success"
      @click="showJoinForm = !showJoinForm"
      large
      >Join Game
    </v-btn>
    <v-form
      v-model="settingsForm"
      lazy-validation
      ref="settingsForm"
      v-if="showJoinForm"
      class="pa-2"
    >
      <v-text-field
        name="pin"
        label="Enter room name"
        v-model="roomId"
        type="text"
      ></v-text-field>
      <v-text-field
        name="pin"
        label="Enter your name please"
        v-model="gameId"
        type="password"
      ></v-text-field>
      <v-select :items="playerSelection" label="Select Player" solo></v-select>
      <CreateLinksButton
        :enableButton="!settingsForm"
        :redirectTo="'/settings/link-setup'"
        :storeMutations="mutations"
      />
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import CreateLinksButton from "@/components/CreateLinksButton.vue";

export default Vue.extend({
  components: {
    CreateLinksButton
  },
  data() {
    return {
      showJoinForm: false,
      roomId: "",
      gameId: "",
      playerSelection: [
        { text: "Player 2", value: 2 },
        { text: "Player 2", value: 2 },
        { text: "Player 3", value: 3 },
        { text: "Player 4", value: 4 }
      ]
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
});
</script>

<style scoped></style>
