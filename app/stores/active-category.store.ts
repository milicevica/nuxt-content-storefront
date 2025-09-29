import { skipHydrate } from "pinia";

export const useActiveCategoryStore = defineStore("active-category", () => {
  const category = ref<string>(" ");
  const products = ref<Product[]>([]);

  const getCategoryName = computed(() => category.value);
  const getNumberOfProducts = computed(() => products.value.length);

  return { category: skipHydrate(category), products: skipHydrate(products), getCategoryName, getNumberOfProducts };
});
