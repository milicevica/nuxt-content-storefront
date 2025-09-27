type Transformer = (raw: any) => any;

type Endpoint = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  responseTransformer?: Transformer;
  requestTransformer?: Transformer;
};

export const providers: Record<string, { baseUrl: string; requests: Record<"categories" | "products", Endpoint> }> = {
  dbc: {
    baseUrl: "https://jsonplaceholder.typicode.com",
    requests: {
      categories: {
        method: "GET",
        path: "/photos",
        responseTransformer: raw => ({
          id: raw.id,
          name: raw.title,
          image: raw.thumbnailUrl,
        }),
      },
      products: {
        method: "GET",
        path: "/products",
        responseTransformer: raw => raw,
      },
    },
  },
};
