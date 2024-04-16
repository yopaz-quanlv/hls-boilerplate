<script setup>
import { ref } from 'vue'

import VideoPlayer from '~/components/video-player.vue'

const options = ref({
  sources: [
    {
      src: 'https://storage.googleapis.com/mern-starter-499b6.appspot.com/hls/aed7f8e8-03b4-4dee-b876-56f956b7db3a_master.m3u8',
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
