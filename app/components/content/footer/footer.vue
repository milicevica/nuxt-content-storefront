<script lang="ts" setup>
const { data: page } = await useTenantLayoutComponent("footer");
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full z-50 py-4 shadow-md bg-white">
    <ContentRenderer v-if="page" :value="page" />
  </footer>
</template>
