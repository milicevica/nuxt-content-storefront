<template>
  <div id="nuxt-content-storefront" class="flex flex-col min-h-screen gap-6">
    <AppHeader />

    <main class="flex-1 pt-32 pb-32">
      <div class="w-4/5 mx-auto p-4">
        <slot />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
