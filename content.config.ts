import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    wiki: defineCollection({
      type: 'page',
      source: 'wiki/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
      })
    })
  }
})
