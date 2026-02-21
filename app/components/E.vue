<template>
  <img 
    :key="finalSrc"
    :src="finalSrc" 
    class="emoji" 
    alt="emoji"
    @error="handleError"
  />
</template>

<script setup>
const props = defineProps(['code'])

// 처음에는 무조건 .png로 시작
const finalSrc = ref(`/emoji/${props.code}.png`)
if (props.code[0]==('a')) {
    finalSrc.value = `/emoji/${props.code}.gif`
}

// 에러 발생(404) 시 실행되는 함수
const handleError = (e) => {
  // 무한 루프 방지: 이미 gif로 바꿨는데 또 에러나면 멈춤
  if (finalSrc.value.includes('.gif')) return

  // 주소를 .gif로 교체 -> 브라우저가 다시 로딩 시도
  // console.log(`PNG 없음! GIF로 전환: ${props.code}`)
  finalSrc.value = `/emoji/${props.code}.gif`
}
</script>

<style scoped>
.emoji {
  height: 1.3em;
  width: auto;
  display: inline-block;
  vertical-align: middle;
  margin: 0 2px !important;
  transform: translateY(-2px); /* 높이 미세 보정 */
  
  /* 부드러운 효과 */
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.emoji:hover {
  transform: translateY(-2px) scale(1.3) rotate(-10deg);
}
</style>