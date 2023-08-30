<template>
  <div class="container mx-auto">
    <div :class="['bg-gray-100', 'p-4', 'mt-4', 'rounded-lg', 'shadow-md', comment.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row']">
      <div class="md:w-1/2">
        <h3 class="text-lg font-semibold text-gray-800">Comment {{ comment.id }}</h3>
        <p class="italic text-xl mt-2 text-black-600">{{ comment.body }}</p>
        <p class="underline mt-2 text-sm text-gray-500">Author: {{ comment.name }} ({{ comment.email }})</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  comment: Object,
});
</script>

<style scoped>
</style>
