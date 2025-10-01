import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    parent: group({
      title: "Default BE Integration",
      description: "BE Integration Configuration",
      icon: "i-ph-palette-fill",
      fields: {
        be: field({
          type: "string",
          title: "BE Integration",
          description: "BE Provider",
          icon: "i-ph-palette",
          default: "demo",
          required: ["demo", "custom"],
        }),
      },
    }),
  },
});
