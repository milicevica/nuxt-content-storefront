export function useTenantLayoutComponent(fileToLoad: string | string[]) {
  const tenant = useTenant();

  // include fileToLoad in the key for caching per file
  const key = `tenant-layout-${tenant.value.tenant}-${fileToLoad}`;

  return useAsyncData(key, async () => {
    let result = await queryCollection("content")
      .path(`/${tenant.value.tenant}/layout/${fileToLoad}`)
      .first();

    if (!result) {
      result = await queryCollection("content")
        .path(`/default/layout/${fileToLoad}`)
        .first();
    }

    if (!result) {
      throw createError({
        statusCode: 404,
        statusMessage: `Layout Component not found '${fileToLoad}'`,
      });
    }

    return result;
  }, {
    server: true, // ensure SSR consistency
  });
}
