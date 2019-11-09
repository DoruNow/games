<template>
  <div>
    <button @click="changeStore()">changeStore</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      someTestValue: 2
    };
  },
  methods: {
    changeStore() {
      return this.$store.commit("setNextPlayer", {
        type: Number,
        playerActive: this.someTestValue
      });
    }
  }
});
</script>

<style scoped></style>
