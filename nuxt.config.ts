import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
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
