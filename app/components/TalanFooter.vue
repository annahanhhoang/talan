<template>
  <v-footer class="text-center flex-column bg-transparent">
    <v-container>
      <nav-links class="my-16" :is-footer="true" />

      <v-divider class="mb-6" />

      <div class="w-100">{{ new Date().getFullYear() }} - The Talan Group. All right reserved.</div>
    </v-container>
  </v-footer>
</template>
