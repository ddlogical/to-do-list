<script setup>
const { type } = defineProps({
  type: String,
});
</script>

<template>
  <svg
    v-if="type === 'check'"
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 -960 960 960"
    fill="#0ee77d"
    width="20"
  >
    <path d="M395-285 226-455l50-50 119 118 289-288 50 51-339 339Z" />
  </svg>
</template>
