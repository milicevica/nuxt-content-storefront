export function useTenantPage(fileToLoad: string | string[]) {
  const tenant = useTenant();

  return useAsyncData("tenant-page", async () => {
    let result = await queryCollection("content").path(`/${tenant.value.tenant}/pages/${fileToLoad}`).first();

    if (!result) {
      result = await queryCollection("content").path(`/default/pages/${fileToLoad}`).first();
    }

    if (!result) {
      throw createError({ statusCode: 404, statusMessage: `Page not found '${fileToLoad}'` });
    }

    return result;
  });
}
