import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';
import type { ThemeDefinition } from 'vuetify';

const colors = {
  accent: '#E0E5F6',
  'light-grey': '#F6F6F6',
  primary: '#F4744B',
  'primary-lighten-1': '#FFBE8F',
  secondary: '#484848',
  'secondary-darken-1': '#111A3A',
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
  colors,
};

export default defineVuetifyConfiguration({
  // your Vuetify options here
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
      dark,
    },
  },
});
