<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug || [];

const { data: page } = await useAsyncData(() =>
  queryCollection("content").path(`/default/${slug}`).first()
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useHead({
  title: page.value?.title,
  meta: [{ name: "description", content: page.value.description }],
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
