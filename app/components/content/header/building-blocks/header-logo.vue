<script lang="ts" setup>
defineProps<{
  image: string;
}>();
</script>

<template>
  <NuxtLink to="/">
    <img
      :src="image"
      alt="Storefront Logo"
      class="h-8 w-32"
    >
  </NuxtLink>
</template>
