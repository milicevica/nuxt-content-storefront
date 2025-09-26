// server/event-context.d.ts
declare module "h3" {
  type H3EventContext = {
    tenant: {
      /** The tenant ID. */
      id: string;
      /** The tenant client hostname. */
      hostname: string;
    };
  };
}

export {};
