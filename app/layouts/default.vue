<script lang="ts" setup>
import Footer from "~/components/content/footer/footer.vue";
import Header from "~/components/content/header/header.vue";
</script>

<template>
  <div id="nuxt-content-storefront" class="flex flex-col min-h-screen gap-6">
    <Header />

    <main class="flex-1 pt-32 pb-16">
      <div class="w-4/5 mx-auto p-4">
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>
