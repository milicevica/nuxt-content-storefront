<script setup>
defineProps({
  text: {
    type: String,
    default: "Add to Cart",
  },
});
</script>

<template>
  <button class="border border-gray-300 rounded-md px-4 py-4 cursor-pointer w-full">
    <slot name="default">
      {{ text }}
    </slot>
  </button>
</template>
