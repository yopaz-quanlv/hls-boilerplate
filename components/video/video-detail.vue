<script setup>
import { computed, ref } from 'vue'

import VideoPlayer from '~/components/video-player.vue'
import { getDate } from '~/utils/getDate'

const props = defineProps({
  uuid: {
    type: String,
    require: true
  }
})

const { data: video } = await useFetch(`/api/videos/${props.uuid}`)

const options = computed(() => {
  if (!video._rawValue) return

  return {
    sources: [
      {
        src: video._rawValue.data.playListUrl,
        type: 'application/x-mpegURL'
      }
    ]
  }
})
</script>

<template>
  <div v-if="video.data">
    <VideoPlayer :options="options" />

    <div class="flex justify-between items-end">
      <h3 class="text-2xl mt-4 font-medium">{{ video.data.title }}</h3>
      <p class="opacity-60">{{ getDate(video.data.createdAt) }}</p>
    </div>
  </div>

  <div v-else>Video data not found.</div>
</template>
