<script lang="ts" setup>
const store = useActiveCategoryStore();
</script>

<template>
  <span>&nbsp;{{ store.getNumberOfProducts }}</span>
</template>
