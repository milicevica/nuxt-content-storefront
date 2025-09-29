<script lang="ts" setup>
const store = useActiveCategoryStore();
</script>

<template>
  <h1 class="text-3xl font-bold">
    {{ store.getCategoryName }}
  </h1>
</template>
