<template>
  <div class="flex justify-center gap-1 text-sm">
    @ {{ new Date().getFullYear() }} <slot />
  </div>
</template>
