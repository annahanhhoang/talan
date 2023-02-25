<template>
  <div>
    <template v-if="isFooter">
      <NuxtLink
        v-for="(link, index) in links"
        :class="[{ 'mr-8': index < links.length - 1 }, 'text-secondary font-weight-semibold']"
        :key="link.title"
        :to="link.to"
      >
        {{ link.title }}
      </NuxtLink>
    </template>
    <div v-else class="d-flex align-center">
      <v-tabs>
        <v-tab
          v-for="(link, index) in links"
          :class="[
            'font-weight-medium text-capitalize',
            {
              'nav-contact d-inline-flex align-self-center ml-8 bg-primary v-btn--variant-flat rounded':
                index === links.length - 1,
            },
          ]"
          :key="link.title"
          :to="link.to"
        >
          {{ link.title }}
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    links: [
      { title: 'Home', to: '/', type: 'link' },
      { title: 'Candidates', to: '/candidates', type: 'link' },
      { title: 'Client', to: '/client', type: 'link' },
      { title: 'Clinical Research Solutions', to: '/solutions', type: 'link' },
      { title: 'About Us', to: '/about', type: 'link' },
      { title: 'Contact Us', to: '/contact', type: 'button' },
    ],
  }),
};
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
