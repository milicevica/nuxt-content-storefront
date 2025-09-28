<script lang="ts" setup>
const { data: page } = await useTenantLayoutComponent("header");
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
    <ContentRenderer v-if="page" :value="page" />
  </header>
</template>
