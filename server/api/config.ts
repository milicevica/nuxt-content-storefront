export default defineCachedEventHandler(async (event) => {
  const { hostname } = event.context.tenant;

  // TODO: Retrieve tenant configuration from BE using
  // the tenant's ID as the key
  const config = {
    name: "Default Tenant",
    theme: "default-tenant-theme",
    lang: "en",
    backendProvider: "dbc",
    tenant: "default",
  };

  if (!config) {
    throw createError({ statusCode: 404, statusMessage: `Tenant configuration not found '${hostname}'` });
  }

  return config;
}, {
  // Unique cache key per tenant
  getKey: event => `tenant-config:${event.context.tenant.hostname}`,
  // Serve a stale cached response while asynchronously revalidating it
  swr: true,
  // Cache for 1 hour
  maxAge: 60 * 60,
  // Important: Prevent discarding tenant-specific headers
  // An array of request headers to be considered for the cache
  varies: ["host", "x-forwarded-host"],
});
