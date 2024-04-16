<script setup>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { defineProps, onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})

const player = ref(null)
const videoPlayer = ref(null)

onMounted(() => {
  player.value = videojs(
    videoPlayer.value,
    { autoplay: true, controls: true, ...props.options },
    () => {
      player.value.log('onPlayerReady', this)
    }
  )
})

onBeforeUnmount(() => {
  if (player.value) {
    player.value.dispose()
  }
})
</script>

<template>
  <video ref="videoPlayer" class="video-js">
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
  </video>
</template>

<style scoped>
.video-js {
  width: 50vw;
  height: auto;
  aspect-ratio: 16 / 9;
}
</style>
