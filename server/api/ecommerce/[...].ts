import { joinURL } from "ufo";

import { providers } from "../../utils/backend-providers";

export default defineEventHandler(async (event) => {
  // Remove the `/ecommerce/api` prefix from the path
  const targetPath = event.path.replace(/^\/api\/ecommerce\//, "");
  const targetPathWithoutQueryParams = targetPath.split("?")[0];
  const targetPathQueryParams = targetPath.split("?")[1] || "";

  // Backend provider based on the tenant's configuration
  const backendProvider = event.context.tenant.backendProvider;

  if (!backendProvider || !providers[backendProvider]) {
    throw createError({ statusCode: 400, statusMessage: "Invalid backend provider for tenant" });
  }

  const provider = providers[backendProvider];

  if (!provider) {
    throw createError({ statusCode: 400, statusMessage: "Backend provider not found" });
  }

  const requestToExecute = (provider.requests as Record<string, typeof provider.requests[keyof typeof provider.requests]>)[targetPathWithoutQueryParams];

  if (!requestToExecute) {
    throw createError({ statusCode: 400, statusMessage: "Requested endpoint not found in backend provider" });
  }

  // Set the request target utilizing tenant's provider external API's base URL
  const target = joinURL(provider.baseUrl, `${requestToExecute.path}?${targetPathQueryParams}`);

  const requestBody = ["PATCH", "POST", "PUT", "DELETE"].includes(event.method) ? await readRawBody(event, false) : undefined;

  const response = await $fetch(target, {
    method: event.method,
    body: requestBody,
    responseType: "json",
    headers: {
      // Add necessary request headers as needed
      // e.g `Cookie`, `Accept`, `Content-Type`, etc.
    },
  });

  if (!requestToExecute.responseTransformer)
    return response;

  if (Array.isArray(response)) {
    const transformedResponse = response.map(item => requestToExecute.responseTransformer!(item));
    return transformedResponse;
  }

  return requestToExecute.responseTransformer(response);
});
