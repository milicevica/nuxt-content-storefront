export default defineNuxtPlugin({
    name: 'tenant-config',
    async setup() {
        interface TenantConfig {
            name: string;
            theme: string;
            css?: string;
        }

        const { data: tenantConfig } = await useApi<TenantConfig>("/api/config");

        useHeadSafe({
            // Add a 'data-theme' attribute to the root <html> element
            htmlAttrs: { 'data-theme': tenantConfig.value?.theme || 'default' }
        })

        useHead({
            style: [{
                innerHTML: () => tenantConfig.value?.css || '',
                tagPosition: 'head'
            }]
        })
    }
})
