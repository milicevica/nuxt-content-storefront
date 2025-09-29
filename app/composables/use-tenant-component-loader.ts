export function useTenantComponentLoader(pathToLoad: string | string[]) {
  const tenant = useTenant();

  const normalizedPath = Array.isArray(pathToLoad) ? pathToLoad.join("/") : pathToLoad;
  const key = `tenant-component-${tenant.value.tenant}-${normalizedPath.replace(/\//g, "-")}`;

  return useAsyncData(key, async () => {
    let result = await queryCollection("content").path(`/${tenant.value.tenant}${pathToLoad}`).first();

    if (!result) {
      result = await queryCollection("content").path(`/default${pathToLoad}`).first();
    }

    if (!result) {
      throw createError({ statusCode: 404, statusMessage: `Failed to find component at path '${pathToLoad}'` });
    }

    return result;
  }, {
    server: true,
  });
}
