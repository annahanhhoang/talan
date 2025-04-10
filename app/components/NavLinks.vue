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
      <!-- Mobile view Navigation -->
      <template v-if="mobile">
        <btn-contact class="ml-6" />
        <v-spacer />
        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in headerLinks"
              :key="`menu${index}`"
              :value="index"
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <!-- Desktop view Navigation -->
      <template v-else>
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
      </template>
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

const headerLinks = [
  { title: 'Home', to: '/', type: 'link' },
  { title: 'About Us', to: '/about', type: 'link' },
  { title: 'Candidates', to: '/candidates', type: 'link' },
  { title: 'Client', to: '/client', type: 'link' },
];

const links = [...headerLinks, { title: 'Contact Us', to: '/contact', type: 'link' }];

const { mobile } = useDisplay();
</script>

<style>
.header-menu .v-btn--variant-text {
  color: #fff;
}
</style>
