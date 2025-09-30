import type { Product } from "./product";

export type DbcProduct = Product & { sku: string };

export type ProductResult = | { tenant: "dbc"; data: DbcProduct[] };
