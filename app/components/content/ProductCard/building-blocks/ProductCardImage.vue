<script lang="ts" setup>
import type { Product } from '~/types';

const { useState } = createSharedState<Product>();

const product = useState();
</script>

<template>
    <img src="https://placehold.co/600x400" :alt="product.title" width="150" height="150">
</template>
