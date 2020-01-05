<template>
  <v-card color="#eef" class="ma-3">
    <v-btn
      class="ma-2"
      color="success"
      @click="showRoomIdField = !showRoomIdField"
      large
      >Load Game</v-btn
    >
    <div v-if="showRoomIdField" class="pa-2">
      <v-text-field
        v-model="roomId"
        name="roomId"
        label="Please enter room id"
        id="roomId"
      ></v-text-field>
      <v-btn color="success">Submit</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      showRoomIdField: false,
      roomId: ""
    };
  }
});
</script>

<style scoped></style>
