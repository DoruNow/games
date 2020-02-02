<template>
  <div class="start-game d-flex align-center justify-center flex-column">
    <StartGame />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StartGame from "../components/StartGame.vue";

export default Vue.extend({
  components: {
    StartGame
  },
  methods: {
    checkGame(gameId) {
      if (this.$store.state.gameId === gameId) {
        this.$router.push({
          path: "settings",
          query: { gameId }
        });
      } else {
        alert("Wrong pin");
      }
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
