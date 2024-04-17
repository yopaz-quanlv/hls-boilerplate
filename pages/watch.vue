<script setup>
import { ref } from 'vue'

import VideoPlayer from '~/components/video-player.vue'

const route = useRoute()

const options = ref({
  sources: [
    {
      src: route.query.v ? `/videos/encoded/${route.query.v}.m3u8` : '',
      type: 'application/x-mpegURL'
    }
  ]
})
</script>

<template>
  <div class="container">
    <VideoPlayer :options="options" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  place-content: center;
  margin: 0 auto;
}
</style>
