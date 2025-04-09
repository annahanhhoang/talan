import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';
import type { ThemeDefinition } from 'vuetify';

const colors = {
  accent: '#E0E5F6',
  'light-grey': '#F6F6F6',
  primary: '#F4744B',
  secondary: '#484848',
  white: '#FFFFFF',
};

const light: ThemeDefinition = {
  dark: false,
  colors: {
    ...colors,
    background: '#FAFAFA',
    //default text color
    'on-background': '#111A3A',
    surface: '#FFFFFF',
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    ...colors,
    'dark-grey': '#212121',
  },
};

export default defineVuetifyConfiguration({
  // your Vuetify options here
  theme: {
    defaultTheme: 'dark',
    themes: {
      light,
      dark,
    },
  },
});
