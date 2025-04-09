<template>
  <div>
    <template v-if="isFooter">
      <v-btn
        v-for="link in links"
        :key="`footer ${link.title}`"
        :active="false"
        :text="link.title"
        :to="link.to"
        variant="text"
      />
    </template>
    <div
      v-else
      class="header-menu d-flex align-center"
    >
      <v-tabs>
        <v-tab
          v-for="link in links"
          :key="link.title"
          :class="['font-weight-medium text-capitalize']"
          :to="link.to"
        >
          {{ link.title }}
        </v-tab>
      </v-tabs>

      <btn-contact class="ml-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isFooter: {
    type: Boolean,
    default: false,
  },
});

const links = [
  { title: 'Home', to: '/', type: 'link' },
  { title: 'About Us', to: '/about', type: 'link' },
  { title: 'Candidates', to: '/candidates', type: 'link' },
  { title: 'Client', to: '/client', type: 'link' },
];
</script>

<style>
.header-menu .v-btn--variant-text {
  color: #fff;
}
</style>
