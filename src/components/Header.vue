<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-icon>mdi-cards-club</v-icon>
      <span class="mr-2">Game Night</span>
    </div>
    <v-spacer></v-spacer>
    <v-btn v-if="homeButton" color="primary" dark @click="goHome">Home</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    homeButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
});
</script>

<style scoped></style>
