<template>
  <v-btn class="text-capitalize text-decoration-none" color="primary" :to="to" variant="flat">
    Contact Us
  </v-btn>
</template>

<script lang="ts">
export default {
  props: {
    to: {
      type: String,
      default: '/contact',
    },
  },
};
</script>
