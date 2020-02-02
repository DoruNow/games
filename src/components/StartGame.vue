<template>
  <div>
    <GetUserInformation
      :displayWhich="displayWhich"
      :storeMutations="mutations"
      :menuCardButtonText="menuCardButtonText"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetUserInformation from "@/components/GetUserInformation.vue";

export default Vue.extend({
  components: {
    GetUserInformation
  },
  data() {
    return {
      menuCardButtonText: "Start a new game",
      displayWhich: { playerName: true, roomName: true, selectPlayer: false }
    };
  },
  computed: {
    mutations() {
      return [
        {
          type: "setRoomName",
          value: {
            roomName: this.roomName
          }
        },
        {
          type: "setPlayerName",
          value: { playerName: this.playerName, playerNo: 1 }
        }
      ];
    }
  }
});
</script>
