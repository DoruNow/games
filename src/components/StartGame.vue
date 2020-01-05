<template>
  <div class="start-game d-flex align-center justify-center flex-column">
    <v-card color="#eef" class="ma-3">
      <v-btn class="ma-2" color="success" @click="startNewGame()" large
        >Create New Game</v-btn
      >
    </v-card>
    <JoinGame />
    <LoadGame />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JoinGame from "../components/JoinGame.vue";
import LoadGame from "../components/LoadGame.vue";

export default Vue.extend({
  components: {
    JoinGame,
    LoadGame
  },
  methods: {
    startNewGame() {
      // TODO move to backend
      this.setGameId();
      this.$router.push({
        path: "settings",
        // TODO move gameId to player 1 decision
        query: { userType: "admin" }
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

<style lang="scss" scoped>
.start-game {
  height: 80vh;
  &__menu-card {
    width: 35vw;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
