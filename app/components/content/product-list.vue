<script lang="ts" setup>
const store = useActiveCategoryStore();
</script>

<template>
  <div class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
    <ProductCard
      v-for="product in store.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
