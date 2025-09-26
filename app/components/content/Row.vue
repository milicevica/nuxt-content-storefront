<template>
  <div class="row">
    <slot />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
</style>
