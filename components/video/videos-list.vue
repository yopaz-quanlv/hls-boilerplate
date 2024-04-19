<script setup>
import VideoCard from '~/components/video/video-card.vue'

import { getDate } from '~/utils/getDate'

const { data: videos } = await useFetch('/api/videos')
</script>

<template>
  <div class="w-full h-full">
    <p v-if="!videos?.data?.length">Videos not found.</p>

    <div class="grid grid-cols-auto-fill gap-6">
      <VideoCard v-for="video in videos.data" :key="video.id" :video="video" />
    </div>
  </div>
</template>
