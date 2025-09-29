<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug || [];
</script>

<template>
  <AppComponentLoader :path-to-load="`/pages/${slug[0]}`" />
</template>
