<script lang="ts" setup>
const props = defineProps<{
  category: Category;
}>();

const { provideState } = createSharedState();

provideState(props.category);
</script>

<template>
  <NuxtLink :to="`/category/${category.id}`" class="min-h-[200px]">
    <AppComponentLoader
      path-to-load="/components/category-card"
      class="flex flex-col gap-[16px] items-center justify-center shadow-md p-4"
      style="height: 100%;"
    />
  </NuxtLink>
</template>
