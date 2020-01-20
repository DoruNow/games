<template>
  <div>
    <MenuCard
      :menuCardButtonText="'Start a new game'"
      :callback="startNewGame"
    />
    <GetUserInformation :displayWhich="displayWhich" />
    
    {{ this.formInformation }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuCard from "@/components/MenuCard.vue";
import GetUserInformation from "@/components/GetUserInformation.vue";
// import CreateLinksButton from "@/components/CreateLinksButton.vue";

export default Vue.extend({
  components: {
    MenuCard,
    GetUserInformation,
    // CreateLinksButton
  },
  props: {
    formInformation: {
      type: Object
    }
  },
  methods: {
    startNewGame() {
      this.$router.push({
        path: "settings"
      });
    }
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
    },
    displayWhich() {
      return { playerName: true, roomName: true };
    }
  }
});
</script>
