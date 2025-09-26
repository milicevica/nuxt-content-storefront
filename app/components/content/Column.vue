<template>
    <div class="column">
        <slot />
    </div>
</template>

<style scoped>
.column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
}
</style>
