<script lang="ts" setup>
const { data: categories } = await useApi<Category[]>(`${Endpoints.Categories}?_limit=10`);
</script>

<template>
  <div class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
    <CategoryCard
      v-for="product in categories"
      :key="product.id"
      :category="product"
    />
  </div>
</template>
