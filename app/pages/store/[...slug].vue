<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug || [];
const tenant = useTenant();

const { data: page } = await useAsyncData(() =>
  queryCollection("content").path(`/${tenant.value.tenant}/pages/${slug}`).first(),
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
