<script lang="ts" setup>
import type { Product } from "~/types";

const { useState } = createSharedState<Product>();

const product = useState();
</script>

<template>
  <div class="flex items-center justify-center mx-auto h-[100px] w-[150px]">
    <NuxtImg
      src="https://placehold.co/600x400"
      :alt="product.name"
      loading="lazy"
      width="150"
      height="100"
      preload
    />
  </div>
</template>
