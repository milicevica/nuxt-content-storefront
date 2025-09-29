<script lang="ts" setup>
const props = defineProps<{
  pathToLoad: string | string[];
}>();

const { data: component } = await useTenantComponentLoader(props.pathToLoad);
</script>

<template>
  <ContentRenderer
    v-if="component"
    :value="component"
  />
</template>
