<template>
  <v-app>
    <Header v-bind:homeButton="true" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";
export default Vue.extend({
  components: {
    Header
  }
});
</script>
