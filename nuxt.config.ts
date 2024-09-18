// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    'nuxt-mapbox'
  ],
  mapbox: {
    accessToken: 'pk.eyJ1IjoiaGJ1aHJlciIsImEiOiJjbHgzZmQ5M3gwdmdhMmtvZXBiMGR2bm10In0.8Ekjyl45hjC1Pgu5rk-tEg'
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
