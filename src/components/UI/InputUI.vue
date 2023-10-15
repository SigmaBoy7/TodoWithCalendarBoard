<template>
  <input :value="props.modelValue" @input="updateInput" class="w-full mt-4 px-3 py-4" type="text">
</template>

<script>
  export default {
      name: 'my-input',
  }
</script>

<script setup>
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    modelValue: [String, Number]
  })

  const emit = defineEmits(['update:modelValue'])
  const updateInput = async(event) => {
    emit('update:modelValue', event.target.value)
  }
</script>

<style>
</style>