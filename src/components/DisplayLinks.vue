<template>
  <div class="d-flex justify-center align-center flex-column">
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >Game room link</v-list-item-title
          >
          <v-list-item-subtitle>{{ gameRoomlink }}</v-list-item-subtitle>
          <v-list-item-title class="headline mb-1"
            >Table link</v-list-item-title
          >
          <v-list-item-subtitle>{{ tableLink }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      gameRoomlink: "",
      tableLink: ""
    };
  },
  mounted() {
    this.gameRoomlink = this.$store.state.roomName;
  }
});
</script>

<style scoped></style>
