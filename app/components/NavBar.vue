<script setup lang="ts">
const { xsOnly } = useDisplay();
</script>

<template>
  <v-app-bar
    app
    flat
  >
    <v-container class="py-0 fill-height">
      <!-- Logo -->
      <TalanLogo />
      <v-spacer />
      <nav-links />
    </v-container>
  </v-app-bar>
</template>
