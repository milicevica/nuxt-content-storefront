<script lang="ts" setup>
const props = defineProps<{
  pathToLoad: string | string[];
}>();

const { data: component } = await useTenantComponentLoader(props.pathToLoad);

if (component.value?.meta && component.value.meta.isPage) {
  useHead({
    title: component.value?.seo.title,
    meta: [{ name: "description", content: component.value?.seo.description }],
  });
}
</script>

<template>
  <ContentRenderer v-if="component" :value="component" />
</template>
