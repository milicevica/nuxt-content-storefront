<script lang="ts" setup>
import type { Product } from '~/types';

const { data: products } = await useApi<Product[]>("/api/ecommerce/photos?_limit=10")
</script>

<template>
    <div class="product-container">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<style scoped>
.product-container {
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}
</style>
