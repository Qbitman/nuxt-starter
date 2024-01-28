// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    assets: '/<rootDir>/assets',
  },

  build: {
    transpile: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons'],
  },

  css: ['bootstrap/dist/css/bootstrap.min.css', '@fortawesome/fontawesome-svg-core/styles.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/theme.scss" as *;',
        },
      },
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],

  i18n: {
    locales: [{ code: 'en', iso: 'en-US', file: '../locales/en.json' }],
    defaultLocale: 'en',
  },
})
