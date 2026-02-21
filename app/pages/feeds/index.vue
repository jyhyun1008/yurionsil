<template>
    <div>
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
    <h1>피드</h1>
    <div class="feeddata">
        <a v-for="feed in data" :href=feed.href target="_blank"><img :src=feed.image /></a>
    </div>
    <div class="prepost">
        <div v-if="page != 0"><a :href="`/feeds?p=${page-1}`">이전 12개</a></div>
        <div v-if="data.length == 12"><a :href="`/feeds?p=${page+1}`">다음 12개</a></div>
    </div>
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
</div>
</template>

<script setup lang="js">
import Header from '~/components/Header.vue';
import Osusume from '~/components/Osusume.vue';

const route = useRoute()
let page = parseInt(route.query.p) || 0

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('feed')
    .where("category", "=", "feed")
    .skip(12*page)
    .limit(12)
    .all()
})

// 페이지 메타 태그 설정 (SEO)
useHead({
  title: '유리온실',
  meta: [
    { name: 'description', content: '우리답게, 이 거리답게' }
  ]
})

</script>

<style>
h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  color: #44714e;
  text-decoration: none;
}

.feeddata {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}

.feeddata img {
    aspect-ratio: 0.8;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.prepost {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
}
</style>