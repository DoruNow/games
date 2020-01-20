<template>
  <v-form v-model="settingsForm" lazy-validation ref="settingsForm">
    <v-text-field
      v-if="displayWhich.playerName"
      v-model="playerName"
      name="playerName"
      label="Player Name"
      id="playerNameId"
      type="text"
      :rules="required"
    ></v-text-field>
    <v-text-field
      v-if="displayWhich.roomName"
      v-model="roomName"
      name="roomName"
      label="Room Name"
      id="roomNameId"
      type="text"
      :rules="required"
    ></v-text-field>
    <v-select
      v-if="displayWhich.selectPlayer"
      :items="playerSelection"
      label="Select Player"
      solo
    ></v-select>
    {{settingsForm}}
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    displayWhich: {
      type: Object
    },
    selectItems: {
      type: Array
    }
  },
  data() {
    return {
      settingsForm: false,
      playerName: "Doru",
      roomName: "KingPin Cool kid",
      playerNo: 0,
      required: [v => !!v || "This field is required"]
    };
  },
  // computed: {
  //   emitFormValidation() {
  //     console.log("form validation emitted");
  //     return this.$emit("formInformation", {
  //       playerName: this.playerName,
  //       roomName: this.roomName,
  //       playerNo: this.playerNo,
  //       formValidation: this.settingsForm
  //     });
  //   }
  // },
  watch: {
    // eslint-disable-next-line
    settingsForm(newValue, oldValue) {
      console.log(newValue)
      return this.$emit("formInformation", {
        playerName: this.playerName,
        roomName: this.roomName,
        playerNo: this.playerNo,
        formValidation: newValue
      });
    }
  }
});
</script>

<style scoped></style>
