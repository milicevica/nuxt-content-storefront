type Transformer<T> = (raw: any) => T;

type Endpoint<T = any> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  responseTransformer?: Transformer<T>;
  requestTransformer?: Transformer<T>;
};

type Provider<C extends Category, P extends Product> = {
  baseUrl: string;
  requests: {
    categories: Endpoint<C>;
    products: Endpoint<P>;
  };
};

const dbcProvider: Provider<Category, DbcProduct> = {
  baseUrl: "https://jsonplaceholder.typicode.com",
  requests: {
    categories: {
      method: "GET",
      path: "/photos",
      responseTransformer: (raw: any): Category => ({
        id: raw.id,
        name: raw.title,
        image: raw.thumbnailUrl,
      }),
    },
    products: {
      method: "GET",
      path: "/photos",
      responseTransformer: (raw: any): DbcProduct => ({
        id: raw.id,
        name: raw.title,
        image: raw.thumbnailUrl,
        sku: `SKU-${raw.id}`,
      }),
    },
  },
};

export const providers = {
  dbc: dbcProvider,
};
