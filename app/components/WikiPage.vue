<template>
  <div class="wiki-app">
    <header class="wiki-header">
      <NuxtLink to="/" class="back-link">← 유리온실</NuxtLink>
      <span class="wiki-brand">위키 🌿</span>
    </header>

    <div class="wiki-body">
      <aside class="wiki-sidebar">
        <nav class="wiki-nav">
          <NuxtLink to="/wiki" class="wiki-nav-link">홈</NuxtLink>
          <NuxtLink
            v-for="p in navPages"
            :key="p.path"
            :to="p.path"
            class="wiki-nav-link"
          >
            {{ p.title }}
          </NuxtLink>
        </nav>
      </aside>

      <main class="wiki-main">
        <template v-if="page">
          <div class="wiki-content">
            <ContentRenderer :value="page" />
          </div>
        </template>
        <template v-else>
          <div class="not-found">
            <div class="not-found-icon">🌿</div>
            <h1>페이지를 찾을 수 없습니다</h1>
            <p>요청하신 위키 페이지가 존재하지 않습니다.</p>
            <NuxtLink to="/wiki" class="not-found-link">위키 홈으로</NuxtLink>
          </div>
        </template>
      </main>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: page } = await useAsyncData(
  () => `wiki-page-${route.path}`,
  () => queryCollection('wiki').path(route.path).first()
)

const { data: allPages } = await useAsyncData('wiki-nav', () =>
  queryCollection('wiki').all()
)

const navPages = computed(() =>
  (allPages.value ?? [])
    .filter(p => {
      if (p.path === '/wiki') return false
      const afterWiki = p.path.slice('/wiki/'.length)
      return !afterWiki.includes('/')
    })
    .sort((a, b) => a.title.localeCompare(b.title, 'ko'))
)

useHead({
  title: () => page.value?.title
    ? `${page.value.title} — 유리온실 위키`
    : '유리온실 위키',
  meta: [
    { name: 'description', content: () => page.value?.description ?? '유리온실 프로젝트 아카이브' }
  ]
})
</script>

<style scoped>
.wiki-app {
  min-height: 100vh;
  background: #f0fdfe;
  font-family: 'Juache', sans-serif;
  display: flex;
  flex-direction: column;
}

.wiki-header {
  background: #fff;
  border-bottom: 1.5px solid #c4f3f5;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-link {
  color: #5bbfc4;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.15s;
}

.back-link:hover { color: #1a8f94; }

.wiki-brand {
  font-size: 18px;
  font-weight: 700;
  color: #1a8f94;
}

.wiki-body {
  display: flex;
  flex: 1;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  padding: 28px 20px;
  gap: 24px;
}

.wiki-sidebar {
  width: 200px;
  flex-shrink: 0;
}

.wiki-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: sticky;
  top: 74px;
}

.wiki-nav-link {
  display: block;
  padding: 8px 14px;
  border-radius: 10px;
  color: #1a8f94;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.15s, color 0.15s;
}

.wiki-nav-link:hover {
  background: #edfcfd;
}

.wiki-nav-link.router-link-exact-active {
  background: #3ddbe1;
  color: #fff;
}

.wiki-main {
  flex: 1;
  min-width: 0;
}

.wiki-content {
  background: #fff;
  border-radius: 16px;
  border: 1.5px solid #c4f3f5;
  padding: 36px 44px;
}

.wiki-content :deep(h1) {
  font-size: 26px;
  font-weight: 700;
  color: #1a8f94;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #c4f3f5;
}

.wiki-content :deep(h2) {
  font-size: 20px;
  font-weight: 700;
  color: #1a8f94;
  margin-top: 36px;
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid #edfcfd;
}

.wiki-content :deep(h3) {
  font-size: 17px;
  font-weight: 600;
  color: #2ba8ad;
  margin-top: 24px;
  margin-bottom: 8px;
}

.wiki-content :deep(p) {
  font-size: 15px;
  line-height: 1.85;
  color: #3d6b6d;
  margin-bottom: 16px;
}

.wiki-content :deep(a) {
  color: #3ddbe1;
  text-decoration: none;
  border-bottom: 1px solid #c4f3f5;
  transition: color 0.15s, border-color 0.15s;
}

.wiki-content :deep(a:hover) {
  color: #1a8f94;
  border-color: #1a8f94;
}

.wiki-content :deep(ul),
.wiki-content :deep(ol) {
  padding-left: 24px;
  margin-bottom: 16px;
}

.wiki-content :deep(li) {
  font-size: 15px;
  line-height: 1.8;
  color: #3d6b6d;
  margin-bottom: 4px;
}

.wiki-content :deep(code) {
  background: #edfcfd;
  color: #1a8f94;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
  font-family: 'Courier New', monospace;
}

.wiki-content :deep(pre) {
  background: #edfcfd;
  border: 1px solid #c4f3f5;
  border-radius: 10px;
  padding: 18px;
  overflow-x: auto;
  margin-bottom: 16px;
}

.wiki-content :deep(pre code) {
  background: none;
  padding: 0;
}

.wiki-content :deep(blockquote) {
  border-left: 3px solid #3ddbe1;
  padding: 10px 18px;
  margin: 20px 0;
  background: #edfcfd;
  border-radius: 0 8px 8px 0;
  color: #5bbfc4;
}

.wiki-content :deep(img) {
  max-width: 100%;
  border-radius: 10px;
  margin: 8px 0;
}

.wiki-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 14px;
}

.wiki-content :deep(th) {
  background: #3ddbe1;
  color: #fff;
  padding: 10px 16px;
  text-align: left;
}

.wiki-content :deep(td) {
  padding: 10px 16px;
  border-bottom: 1px solid #c4f3f5;
  color: #3d6b6d;
}

.wiki-content :deep(tr:nth-child(even) td) {
  background: #f7feff;
}

.wiki-content :deep(hr) {
  border: none;
  border-top: 1.5px solid #c4f3f5;
  margin: 28px 0;
}

.not-found {
  background: #fff;
  border-radius: 16px;
  border: 1.5px solid #c4f3f5;
  padding: 60px 40px;
  text-align: center;
}

.not-found-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.not-found h1 {
  font-size: 22px;
  color: #1a8f94;
  margin-bottom: 8px;
}

.not-found p {
  font-size: 14px;
  color: #7dd6da;
  margin-bottom: 24px;
}

.not-found-link {
  display: inline-block;
  padding: 10px 24px;
  background: #3ddbe1;
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.15s;
}

.not-found-link:hover { opacity: 0.85; }

@media (max-width: 720px) {
  .wiki-body {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }

  .wiki-sidebar { width: 100%; }

  .wiki-nav {
    flex-direction: row;
    flex-wrap: wrap;
    position: static;
  }

  .wiki-content { padding: 20px 18px; }
}
</style>
