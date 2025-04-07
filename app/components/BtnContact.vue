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

<script setup lang="ts">
const props = defineProps({
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
});

const textClass = computed(() => {
  return props.textColor ? `text-${props.textColor}` : '';
});
</script>
