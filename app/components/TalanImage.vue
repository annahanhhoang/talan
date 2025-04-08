<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: 0,
  },
  height: {
    type: [Number, String],
    default: 0,
  },
  preload: {
    type: Boolean,
    default: false,
  },
  fit: {
    type: String,
    default: 'cover',
  },
});
</script>

<template>
  <NuxtImg
    v-slot="{ src, imgAttrs }"
    :src="imgSrc"
    :alt="alt"
    :fit="fit"
    :preload="preload"
    :custom="true"
    placeholder
  >
    <v-img
      :width="width || '100%'"
      :height="height || 'auto'"
      :src="src"
      :srcset="imgAttrs.srcset"
      :alt="alt"
      :cover="fit === 'cover'"
    >
      <slot />
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <p>Image loading...</p>
        </div>
      </template>
    </v-img>
  </NuxtImg>
</template>
