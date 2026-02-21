<template>
  <Header />

 <!-- メインビジュアル -->
 <div class="mainvisual">
  <div class="mainvisual__img" id="mainImg">
   <img src="https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg" alt="">
  </div>
  <!-- サイト名 -->
  <h1 class="sitename"><a href="/">유리온실</a></h1>
 </div><!-- メインビジュアルここまで -->

 <!-- メインコンテンツ -->
 <main class="mainwrapper" id="js-main">
  <section>
      <div><a href="/posts">목록 보기</a></div>
      <ContentRenderer :value="data" />
  </section>

  <section>
    <Osusume />
  </section>
 </main>

 <footer>
  <!-- クレジット -->
  <small>© 2026 YuriOnsil. Designed by <a href="https://utsusemi.hiroec.com" target="_blank">Utsusemi</a>.</small>
  <!-- クレジットここまで -->
 </footer>

</template>

<script setup lang="js">

import Header from '~/components/Header.vue';
import Osusume from '~/components/Osusume.vue';
const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('feed').path(route.path).first()
})

// 페이지 메타 태그 설정 (SEO)
useHead({
  title: data.value?.title || '유리온실',
  meta: [
    { name: 'description', content: data.value?.description || '우리답게, 이 거리답게' }
  ]
})

</script>

<style>
h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  color: #44714e;
  text-decoration: none;
}
</style>