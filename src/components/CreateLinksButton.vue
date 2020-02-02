<template>
  <div>
    <v-btn
      :disabled="enableButton"
      color="success"
      class="mr-4"
      @click="createLinks"
      >Create Links</v-btn
    >
  </div>
</template>

<script lang="ts">
export default {
  props: {
    storeMutations: {
      type: Array
    },
    redirectTo: {
      type: String
    },
    formInformation: {
      type: Object
    }
  },
  methods: {
    update() {
      console.log("event");
    },
    createLinks() {
      this.storeMutations.forEach(mutation => {
        console.log(mutation);
        this.$store.commit({
          type: mutation.type,
          value: mutation.value
        });
      });
      this.$router.push({
        path: this.redirectTo
      });
    }
  }
};
</script>
