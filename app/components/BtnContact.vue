<template>
  <v-btn
    :class="`text-capitalize text-decoration-none ${textClass}`"
    :color="color"
    :to="to"
    variant="flat"
  >
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
    color: {
      type: String,
      default: 'primary',
    },

    textColor: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    textClass() {
      return this.textColor ? `text-${this.textColor}` : '';
    },
  },
};
</script>
