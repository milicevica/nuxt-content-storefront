type Transformer = (raw: any) => any;

export const providers: Record<string, { baseUrl: string; transformers: Record<string, Transformer> }> = {
  dbc: {
    baseUrl: "https://jsonplaceholder.typicode.com",
    transformers: {
      photos: raw => ({
        id: raw.id,
        name: raw.title,
        image: raw.thumbnailUrl,
      }),
    },
  },
};
