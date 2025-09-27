<script lang="ts" setup>
import type { Product } from "~/types";

const props = defineProps<{
  product: Product;
}>();

const tenant = useTenant();
const { provideState } = createSharedState();
const { data: page } = await useAsyncData(() => queryCollection("content").path(`/${tenant.value.tenant}/components/product-card`).first());

provideState(props.product);
</script>

<template>
  <div class="product-card">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1.6rem;
  text-align: center;

  min-height: 200px;
}

.product-card div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
