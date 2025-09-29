<script lang="ts" setup>
import type { Product } from "~/types";

const props = defineProps<{
  product: Product;
}>();

const { provideState } = createSharedState();

provideState(props.product);
</script>

<template>
  <div class="flex flex-col border border-[#eaeaea] rounded-lg p-6 text-center min-h-[200px]">
    <AppComponentLoader path-to-load="/components/product-card" class="flex flex-col gap-[16px]" />
  </div>
</template>
