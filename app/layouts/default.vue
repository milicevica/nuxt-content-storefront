<template>
  <div id="nuxt-content-storefront" class="flex flex-col min-h-screen gap-6">
    <AppComponentLoader path-to-load="/layout/header" />

    <main class="flex-1 pt-42 pb-16">
      <div class="w-4/5 mx-auto p-4">
        <slot />
      </div>
    </main>

    <AppComponentLoader path-to-load="/layout/footer" />
  </div>
</template>
