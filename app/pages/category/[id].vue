<script lang="ts" setup>
const route = useRoute();
const categoryId = route.params.id;
const { data: products } = await useApi<Product[]>(`${Endpoints.Products}?categoryId=${categoryId}&_limit=10`);
</script>

<template>
  <div class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
