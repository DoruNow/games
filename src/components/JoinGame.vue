<template>
  <v-card color="#eef" class="ma-3">
    <v-btn class="ma-2 d-flex" color="success" @click="showPin = !showPin" large
      >Join Game
    </v-btn>
    <div v-if="showPin" class="pa-2">
      <v-text-field
        name="pin"
        label="Enter room name"
        v-model="roomId"
        type="text"
      ></v-text-field>
      <v-text-field
        name="pin"
        label="Enter a pin please"
        v-model="gameId"
        type="password"
      ></v-text-field>
      <v-select :items="playerSelection" label="Select Player" solo></v-select>
      <v-btn color="success">Join</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      showPin: false,
      roomId: "",
      gameId: "",
      playerSelection: ["Player 2", "Player 3", "Player 4"]
    };
  }
});
</script>

<style scoped></style>
