<script setup>
import VideosList from '~/components/video/videos-list.vue'
</script>

<template>
  <div class="w-full h-full p-12">
    <div class="flex justify-between items-center">
      <h1 class="font-medium text-2xl mb-4">Video List</h1>

      <NuxtLink
        :to="`/upload`"
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
      >
        Upload new video
      </NuxtLink>
    </div>

    <VideosList />
  </div>
</template>
