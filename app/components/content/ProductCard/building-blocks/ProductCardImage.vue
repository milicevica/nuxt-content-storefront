<script lang="ts" setup>
import type { Product } from '~/types';

const { useState } = createSharedState<Product>();

const product = useState();
</script>

<template>
    <div class="product-image">
        <img src="https://placehold.co/600x400" :alt="product.title" width="150" height="100">
    </div>
</template>

<style scoped>
.product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    height: 100px;
    width: 150px;
}
</style>
