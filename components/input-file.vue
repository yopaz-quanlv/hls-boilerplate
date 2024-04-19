<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  accept: {
    type: String,
    default: 'image/*'
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.files[0])
}
</script>

<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900" :for="props.id">{{ props.label }}</label>
    <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      :id="props.id"
      type="file"
      :accept="props.accept"
      @change="updateValue"
    />
  </div>
</template>
