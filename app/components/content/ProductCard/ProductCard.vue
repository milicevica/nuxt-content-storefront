<script lang="ts" setup>
import type { Product } from '~/types';

const props = defineProps<{
  product: Product;
}>();

const { provideState } = createSharedState();
const { data: page } = await useAsyncData(() => queryCollection("content").path("/default/product-card").first())

provideState(props.product);
</script>


<template>
    <div class="product-card">
        <ContentRenderer v-if="page" :value="page" />
    </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1.6rem;
  text-align: center;
}
</style>

