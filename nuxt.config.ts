export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  compatibilityDate: '2025-06-01',
  css: ['~/assets/css/base.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
