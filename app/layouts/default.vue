<template>
  <div id="nuxt-content-storefront" class="flex flex-col min-h-screen gap-6">
    <header class="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
      <AppComponentLoader path-to-load="/layout/header" />
    </header>

    <main class="flex-1 pt-42 pb-16">
      <div class="w-4/5 mx-auto p-4">
        <slot />
      </div>
    </main>

    <footer class="fixed bottom-0 left-0 w-full z-50 py-4 shadow-md bg-white">
      <AppComponentLoader path-to-load="/layout/footer" />
    </footer>
  </div>
</template>
