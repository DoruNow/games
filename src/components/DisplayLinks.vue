<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-text>
      <p class="display-1 text--primary">Links</p>
      <p class="title text--primary">Game Room Link:</p>
      <p class="subtitle-1 text--primary">
        {{
          `http://192.168.5.122:8080/player/${this.$route.params.roomName}/${this.$route.params.playerSelection}`
        }}
      </p>
      <p class="title text--primary">Table link:</p>
      <p class="subtitle-1 text--primary">
        {{ `http://192.168.5.122:8080/room/${this.$route.params.roomName}` }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
