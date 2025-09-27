export function useEndpoints() {
  const basePath = "/api/ecommerce";

  return {
    getCategories: `${basePath}/categories`,
  };
}
