<script lang="ts" setup>
defineProps<{
  breadcrumbs?: Array<{ text: string; href?: string }>;
}>();
</script>

<template>
  <div class="flex flex-row gap-2">
    <span>Home</span>
    <span v-if="breadcrumbs?.length">></span>
    <template v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.text">
      <span> {{ breadcrumb }}</span>
      <span v-if="index < (breadcrumbs?.length ?? 0) - 1">></span>
    </template>
  </div>
</template>
