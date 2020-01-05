<template>
  <v-container class="fill-height" fluid>
    <v-layout text-center wrap>
      <v-row align="center" justify="center">
        <div class="d-flex flex-column">
          <v-btn class="ma-2" color="success" @click="startNewGame()" large
            >Create New Game</v-btn
          >
          <v-btn class="ma-2" color="success" @click="showPin = true" large
            >Join</v-btn
          >
          <div v-if="showPin">
            <v-text-field
              name="pin"
              label="Enter your pin please"
              v-model="gameId"
              type="password"
            ></v-text-field>
            <v-btn
              v-if="gameId.length === 4"
              color="success"
              @click="checkGame(gameId)"
              >Join Game</v-btn
            >
            <v-btn color="success">Submit</v-btn>
          </div>
          <v-btn
            class="ma-2"
            color="success"
            @click="showRoomIdField = true"
            large
            >Load Game</v-btn
          >
          <div v-if="showRoomIdField">
            <v-text-field
              name="roomId"
              label="Please enter room id"
              id="roomId"
            ></v-text-field>
            <v-btn color="success">Submit</v-btn>
          </div>
        </div>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      gameId: "",
      showPin: false,
      showRoomIdField: false
    };
  },
  methods: {
    startNewGame() {
      // TODO move to backend
      this.setGameId();
      this.$router.push({
        path: "settings",
        // TODO move gameId to player 1 decision
        query: { userType: "admin", gameId: "1010" }
      });
    },
    checkGame(gameId) {
      if (this.$store.state.gameId === gameId) {
        this.$router.push({
          path: "settings",
          query: { userType: "player", gameId }
        });
      } else {
        alert("Wrong pin");
      }
    },
    setGameId() {
      this.$store.commit("setGameId", {
        // TODO move gameId to player 1 decision
        gameId: "1010"
      });
    }
  }
});
</script>

<style scoped></style>
