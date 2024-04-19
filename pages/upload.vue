<script setup>
import { ref } from 'vue'

const loadedFile = ref(null)
const isLoading = ref(false)
const uploadedUrl = ref('')

const uploadFile = (event) => {
  const file = event.target.files[0]

  loadedFile.value = file
}

const onSubmit = async () => {
  if (!loadedFile.value) return

  isLoading.value = true

  const formData = new FormData()
  formData.append('file', loadedFile.value)

  const { data } = await useFetch('/api/upload', {
    header: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'POST',
    body: formData
  })

  uploadedUrl.value = data._rawValue.url
  isLoading.value = false
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="file" @change="uploadFile" accept=".mp4,.webm,.mov" />

    <button type="submit" :disabled="isLoading">
      <span v-if="isLoading">Uploading...</span>
      <span v-else>Upload</span>
    </button>
  </form>

  <div v-if="uploadedUrl">
    <NuxtLink :to="`/watch?v=${uploadedUrl}`"> http://localhost:3000/watch?v{{ uploadedUrl }} </NuxtLink>
  </div>
</template>
