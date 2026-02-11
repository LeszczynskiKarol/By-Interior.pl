import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.by-interior.pl",
  integrations: [tailwind()],
});
