<script lang="ts" setup>
import type { Product } from "~/types";

const { useState } = createSharedState<Product>();

const product = useState();
</script>

<template>
  <p class="h-[75px]">
    {{ product.name }}
  </p>
</template>
