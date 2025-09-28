<script lang="ts" setup>
defineProps<{
  image: string;
}>();
</script>

<template>
  <img
    :src="image"
    alt="Storefront Logo"
    class="h-8 w-32"
  >
</template>
