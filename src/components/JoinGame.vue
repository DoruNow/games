<template>
  <div>
    <GetUserInformation
      :displayWhich="displayWhich"
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
      menuCardButtonText: "Join game",
      displayWhich: { playerName: true, roomName: true, selectPlayer: true }
    };
  }
});
</script>
