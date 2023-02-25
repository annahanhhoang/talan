import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// default theme options:
// https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/theme.ts#L108
const light: ThemeDefinition = {
  dark: false,
  colors: {
    accent: '#E0E5F6',
    background: '#FAFAFA',
    'light-grey': '#F6F6F6',
    //default text color
    'on-background': '#111A3A',
    primary: '#F4744B',
    'primary-lighten-1': '#FFBE8F',
    secondary: '#484848',
    'secondary-darken-1': '#111A3A',
    surface: '#FFFFFF',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
