<script setup>
const props = defineProps({
  type: String,
});
const emit = defineEmits(["clickHandler"]);
</script>

<template>
  <button :type="type" @click.prevent="$emit('clickHandler')">
    <slot></slot>
  </button>
</template>
