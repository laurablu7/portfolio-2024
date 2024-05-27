import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "8wu4vceh",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
  ],
});