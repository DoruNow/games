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
import Header from "../components/Header.vue";
import GlobalGameSettings from "../components/GlobalGameSettings.vue";
export default Vue.extend({
  components: {
    Header,
    GlobalGameSettings
  }
});
</script>

<style scoped></style>
