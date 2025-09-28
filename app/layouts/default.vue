<template>
  <div id="nuxt-content-storefront" class="flex flex-col min-h-screen gap-6">
    <AppHeader />

    <main class="flex-1 pt-16 pb-16">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
