<template>
  <v-card color="#eef" class="ma-3">
    <v-btn class="ma-2" color="success" @click="callback()" large>{{
      menuCardButtonText
    }}</v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    menuCardButtonText: {
      type: String,
      default: ""
    },
    callback: {
      type: Function
    }
  }
});
</script>

<style scoped></style>
