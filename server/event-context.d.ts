// server/event-context.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { H3EventContext } from 'h3'

declare module 'h3' {
  interface H3EventContext {
    tenant: {
      /** The tenant ID. */
      id: string
      /** The tenant client hostname. */
      hostname: string
    }
  }
}

export {}
