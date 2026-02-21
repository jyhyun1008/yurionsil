import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: z.string()
      })
    }),

    feed: defineCollection({
      type: 'page',
      source: 'feed/*.md',
      schema: z.object({
        title: z.string(),
        category: z.string(),
        href: z.string(),
        date: z.date(),
        image: z.string()
      })
    })
  }
})
