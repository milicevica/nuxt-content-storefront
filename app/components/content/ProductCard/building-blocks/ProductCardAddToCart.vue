<script setup>
defineProps({
    text: {
        type: String,
        default: 'Add to Cart'
    }
})
</script>

<template>
    <button>
        <slot name="default">{{ text }}</slot>
    </button>
</template>
