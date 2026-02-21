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
    <h1>악곡</h1>
    <div class="ytdata">
        <iframe v-for="feed in data" :src="`https://www.youtube.com/embed/${feed.href.split('=')[1]}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('feed')
    .orWhere(query => query.where('category', '=', "original").where("category", "=", "cover"))
    .all()
})

console.log(data.value)

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

.ytdata {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.ytdata iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
  box-shadow: 5px 10px 10px #33333322;
}
</style>