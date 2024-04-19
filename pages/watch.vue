<script setup>
import { ref } from 'vue'

import VideoDetail from '~/components/video/video-detail.vue'

definePageMeta({
  layout: 'detail'
})

const route = useRoute()

const videoUuid = ref(route.query.v ?? '')
</script>

<template>
  <div v-if="videoUuid">
    <VideoDetail :uuid="videoUuid" />
  </div>

  <div v-else>Invalid video id.</div>
</template>
