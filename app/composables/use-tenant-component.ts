export function useTenantComponent(fileToLoad: string | string[]) {
  const tenant = useTenant();

  return useAsyncData("tenant-component", async () => {
    let result = await queryCollection("content").path(`/${tenant.value.tenant}/components/${fileToLoad}`).first();

    if (!result) {
      result = await queryCollection("content").path(`/default/components/${fileToLoad}`).first();
    }

    if (!result) {
      throw createError({ statusCode: 404, statusMessage: `Page not found '${fileToLoad}'` });
    }

    return result;
  });
}
