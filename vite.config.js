import { copyFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project under /<repo>/, so production builds need
// that subpath. CI passes BASE_PATH from configure-pages; local builds fall
// back to the same default.
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      // GitHub Pages serves index.html as 404.html; that makes deep links
      // like /menu work on a hard refresh inside this SPA.
      name: "spa-404-fallback",
      closeBundle() {
        copyFileSync("dist/index.html", "dist/404.html");
      },
    },
  ],
  base: command === "build" ? process.env.BASE_PATH || "/sweet-tales/" : "/",
}));
