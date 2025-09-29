<script lang="ts" setup>
const store = useActiveCategoryStore();
const route = useRoute();
const categoryId = route.params.id;

const { data: products } = await useApi<Product[]>(`${Endpoints.Products}?categoryId=${categoryId}&_limit=10`);

store.category = "Demo Category";
store.products = products.value || [];
</script>

<template>
  <AppComponentLoader path-to-load="/pages/category" />
</template>
