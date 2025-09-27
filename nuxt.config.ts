import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "fr", language: "fr-FR", file: "fr.json" },
    ],
    defaultLocale: "en",
  },
  css: ["~/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
    renderer: {
      anchorLinks: false,
    },
  },
  mdc: {
    components: {
      prose: false,
    },
  },
  colorMode: {
    dataValue: "theme",
  },
});
