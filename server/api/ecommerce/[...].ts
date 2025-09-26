import { joinURL } from "ufo";

import { providers } from "../../utils/backend-providers";
import { transformResponse } from "../../utils/transform";

export default defineEventHandler(async (event) => {
  // Remove the `/external/api` prefix from the path
  const targetPath = event.path.replace(/^\/api\/ecommerce\//, "");
  // Backend provider based on the tenant's configuration
  const backendProvider = event.context.tenant.backendProvider;

  if (!backendProvider || !providers[backendProvider]) {
    throw createError({ statusCode: 400, statusMessage: "Invalid backend provider for tenant" });
  }

  const provider = providers[backendProvider];

  // Set the request target utilizing tenant's provider external API's base URL
  const target = joinURL(provider.baseUrl, targetPath);
  // Determine the request body when applicable
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

  return transformResponse(backendProvider, targetPath, response);
});
