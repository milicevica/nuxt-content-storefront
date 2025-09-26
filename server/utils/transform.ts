import { providers } from "./backend-providers";

export function transformResponse(provider: string, path: string, data: any) {
  const foundProvider = providers[provider];

  if (!foundProvider)
    return data;

  const endpoint = Object.keys(foundProvider.transformers).find(key => path.startsWith(key));

  if (!endpoint)
    return data;

  const transformer = foundProvider.transformers[endpoint];

  if (!transformer) {
    return data;
  }

  if (Array.isArray(data)) {
    const transformedData = data.map(item => transformer(item));

    return transformedData;
  }

  return transformer(data);
}
