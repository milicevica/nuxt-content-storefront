import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    "Backend Integration": group({
      title: "Default BE Integration",
      description: "BE Integration Configuration",
      icon: "i-ph-computer-tower",
      fields: {
        be: field({
          type: "string",
          title: "BE Integration",
          description: "BE Provider",
          icon: "i-ph-computer-towe",
          default: "demo",
          required: ["demo", "custom"],
        }),
      },
    }),
  },
});
