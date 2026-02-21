import remarkCustomEmoji from './utils/remark-emoji' // 방금 만든 파일 import
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  app: {
    // 깃허브 배포 예정이라면 repo 이름, 로컬 테스트 중이면 '/'
    baseURL: '/' 
  },
  content: {
    build: {
      markdown: {
        // remarkPlugins에 커스텀 플러그인 추가
        remarkPlugins: {
          'remark-emoji': {
            instance: remarkCustomEmoji,
          }
        }
      }
    }
  },
})