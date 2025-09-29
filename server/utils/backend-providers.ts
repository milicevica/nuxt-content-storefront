type Transformer<T> = (raw: any) => T;

type Endpoint<T = any> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  responseTransformer?: Transformer<T>;
  requestTransformer?: Transformer<T>;
};

export const providers: Record<string, { baseUrl: string; requests: Record<"categories" | "products", Endpoint> }> = {
  dbc: {
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
        responseTransformer: (raw: any): Product => ({
          id: raw.id,
          name: raw.title,
          image: raw.thumbnailUrl,
        }),
      },
    },
  },
};
