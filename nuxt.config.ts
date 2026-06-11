export default defineNuxtConfig({
  modules: [
    function (_options, nuxt) {
      // @ts-ignore
      nuxt.hook('content:file:beforeParse', (ctx: any) => {
        if (typeof ctx.file?.body !== 'string') return
        ctx.file.body = ctx.file.body.replace(
          /^!grid\[([^\]]+)\]$/gm,
          (_match: string, raw: string) => {
            const urls = raw.split(',').map((u: string) => u.trim()).filter(Boolean)
            const items = urls.map((url: string) =>
              `<div class="image-grid-item"><img src="${url}" alt="" loading="lazy" /></div>`
            )
            if (urls.length % 2 !== 0) items.push('<div class="image-grid-dummy"></div>')
            return `<div class="image-grid">\n${items.join('\n')}\n</div>`
          }
        )
      })
    },
    '@nuxt/content',
  ],
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
