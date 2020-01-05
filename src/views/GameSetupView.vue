<template>
  <v-app>
    <Header v-bind:homeButton="true" />
    <v-content>
      <GlobalGameSettings />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header";
import GlobalGameSettings from "../components/GlobalGameSettings";
export default Vue.extend({
  components: {
    Header,
    GlobalGameSettings
  }
});
</script>

<style scoped></style>
