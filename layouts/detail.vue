<script setup>
import LeftArrow from '~/components/icons/left-arrow.vue'
</script>

<template>
  <div class="w-screen h-screen flex-center">
    <div class="rounded-md border shadow-sm w-content h-auto p-4">
      <NuxtLink
        to="/"
        class="mb-2 text-lg hover:underline transition-all flex justify-start items-center gap-1.5 group"
      >
        <LeftArrow class="group-hover:translate-x-[-3px] transition-transform duration-200" /> Back to home
      </NuxtLink>
      <slot />
    </div>
  </div>
</template>
