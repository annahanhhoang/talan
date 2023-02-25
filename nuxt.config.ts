import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'The Talan Group',
      meta: [
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: description,
        // },
        { name: 'referrer', content: 'always' },
        { name: 'color-scheme', content: 'light' },
        { name: 'application-name', content: 'The Talan Group' },
        { name: 'msapplication-TileColor', content: 'white' },
        { name: 'msapplication-TileImage', content: '/favicon-144.png' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'The Talan Group',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-128.png', sizes: '128x128' },
        { rel: 'icon', type: 'image/png', href: '/favicon-192.png', sizes: '192x192' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon-196.png', sizes: '196x196' },
        { rel: 'apple-touch-icon', href: '/favicon-152.png', sizes: '152x152' },
        { rel: 'apple-touch-icon', href: '/favicon-180.png', sizes: '180x180' },
      ],
    },
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '/assets/styles/global.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push(
        vuetify({
          autoImport: true,
          styles: { configFile: new URL('assets/styles/settings.scss', import.meta.url).pathname },
        })
      );
    },
  },
});
