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
      class="d-flex align-center"
    >
      <v-tabs>
        <v-tab
          v-for="(link, index) in links"
          :key="link.title"
          :class="[
            'font-weight-medium text-capitalize',
            {
              'nav-contact d-inline-flex align-self-center ml-8 bg-primary v-btn--variant-flat rounded':
                index === links.length - 1,
            },
          ]"
          :to="link.to"
        >
          {{ link.title }}
        </v-tab>
      </v-tabs>
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
  { title: 'Contact Us', to: '/contact', type: 'button' },
];
</script>

<style lang="scss">
.nav-contact {
  &.v-tab.v-tab {
    --v-btn-height: 36px;
  }

  &.v-tab--selected .v-tab__slider {
    opacity: 0;
  }
}
</style>
