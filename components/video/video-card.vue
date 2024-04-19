<script setup>
import { defineProps } from 'vue'

const { video } = defineProps({
  video: {
    type: Object,
    require: true
  }
})
</script>

<template>
  <div class="ring-1 rounded-md shadow relative">
    <img :src="video.thumbnail" class="rounded-t-md" />

    <div class="px-3 py-2">
      <h2 class="font-medium text-lg">{{ video.title }}</h2>

      <p class="opacity-60">{{ getDate(video.createdAt) }}</p>
    </div>

    <NuxtLink :to="`/watch?v=${video.uuid}`" class="w-full h-full absolute top-0 left-0 z-[2]"></NuxtLink>
  </div>
</template>
