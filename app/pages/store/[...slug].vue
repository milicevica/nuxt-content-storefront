<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug || [];

const { data: page } = await useTenantPage(slug);

useHead({
  title: page.value?.title,
  meta: [{ name: "description", content: page.value?.description }],
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
