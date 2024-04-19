<script setup>
import { ref } from 'vue'
import Input from '~/components/input.vue'
import InputFile from '~/components/input-file.vue'
import Button from '~/components/button.vue'

const router = useRouter()

const title = ref('')
const loadedFile = ref(null)
const isLoading = ref(false)

const onSubmit = async () => {
  if (!title.value || !loadedFile.value) return

  isLoading.value = true

  const formData = new FormData()
  formData.append('title', title.value)
  formData.append('file', loadedFile.value)

  const { data } = await useFetch('/api/upload', {
    header: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'POST',
    body: formData
  })

  router.push(`/watch?v=${data._rawValue.data.uuid}`)
  isLoading.value = false
}
</script>

<template>
  <div class="w-[50rem]">
    <form @submit.prevent="onSubmit" class="flex flex-col gap-6">
      <Input label="Title" id="title" placeholder="Superman..." v-model="title" />

      <InputFile label="Upload video" id="video" accept=".mp4,.mov,.webm" v-model="loadedFile" />

      <Button type="submit" :isLoading="isLoading" class="w-min">Upload</Button>
    </form>
  </div>
</template>
