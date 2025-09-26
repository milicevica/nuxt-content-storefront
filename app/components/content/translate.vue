<script setup lang="ts">
type Props = {
  value: string;
};

defineProps<Props>();
</script>

<template>
  <span>{{ $t(value) }}</span>
</template>
