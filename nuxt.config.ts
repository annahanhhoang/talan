// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/fonts', 'vuetify-nuxt-module'],

  ssr: true,

  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'The Talan Group',
      meta: [
        { name: 'referrer', content: 'always' },
        { name: 'color-scheme', content: 'light' },
        { name: 'application-name', content: 'The Talan Group' },
        { name: 'msapplication-TileColor', content: 'white' },
        { name: 'msapplication-TileImage', content: '/favicon-144.png' },
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

  css: ['assets/global.scss'],

  vuetify: {
    moduleOptions: {
      // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        prefersColorScheme: false,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },

      // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
      // disableVuetifyStyles: true,
      styles: {
        configFile: 'assets/settings.scss',
      },
    },
  },
});
