import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.divdot.ru/",
  vite: {
    plugins: [tailwindcss()]
  }
});
