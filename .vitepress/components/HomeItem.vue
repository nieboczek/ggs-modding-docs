<script setup lang="ts">
defineProps<{
  name: string
  link: string
}>()
</script>

<template>
  <li>
    <a :href="link">{{ name }}</a><br>
  </li>
</template>

<style scoped>
a {
  transition: color 0.25s;
  color: var(--vp-gray-1);
}

a:hover {
  color: var(--vp-c-brand);
}
</style>
