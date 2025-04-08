<template>
  <v-footer class="text-center">
    <v-container>
      <nav-links
        class="mb-3"
        :is-footer="true"
      />

      <v-divider class="mb-3 mb-md-6" />

      <div class="w-100">{{ new Date().getFullYear() }} - The Talan Group. All right reserved.</div>
    </v-container>
  </v-footer>
</template>
