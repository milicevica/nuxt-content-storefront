export default defineNuxtPlugin({
  name: "tenant-config",
  async setup() {
    const i18n = useNuxtApp().$i18n;

    type TenantConfig = {
      name: string;
      theme: string;
      css?: string;
      lang?: "en" | "fr";
      backendProvider: string;
    };

    const { data: tenantConfig } = await useApi<TenantConfig>("/api/config");

    useTenant().value = tenantConfig.value;

    if (i18n) {
      // TODO: identify user's preferred language from browser settings
      i18n.setLocale(tenantConfig.value?.lang || "en");
    }

    useHeadSafe({
      // Add a 'data-theme' attribute to the root <html> element
      htmlAttrs: {
        "data-theme": tenantConfig.value?.theme || "default",
        "lang": tenantConfig.value?.lang || "en",
      },
    });

    useHead({
      style: [{
        innerHTML: () => tenantConfig.value?.css || "",
        tagPosition: "head",
      }],
    });
  },
});
