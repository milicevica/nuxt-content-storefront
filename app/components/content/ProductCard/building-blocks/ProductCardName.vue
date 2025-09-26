<script lang="ts" setup>
import type { Product } from '~/types';

const { useState } = createSharedState<Product>();

const product = useState();
</script>

<template>
    <p style="height: 40px;">{{ product.title }}</p>
</template>
