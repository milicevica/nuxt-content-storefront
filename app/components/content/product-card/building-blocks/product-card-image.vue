<script lang="ts" setup>
import type { Product } from "~/types";

const { useState } = createSharedState<Product>();

const product = useState();
</script>

<template>
  <div class="flex items-center justify-center mx-auto h-[100px] w-[150px]">
    <img
      src="https://placehold.co/600x400"
      :alt="product.name"
      width="150"
      height="100"
    >
  </div>
</template>
