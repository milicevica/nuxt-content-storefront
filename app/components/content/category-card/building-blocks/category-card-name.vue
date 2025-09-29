<script lang="ts" setup>
const { useState } = createSharedState<Category>();

const category = useState();
</script>

<template>
  <p class="text-center">
    {{ category.name }}
  </p>
</template>
