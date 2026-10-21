import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves this project under /<repo>/, so production builds need
  // that subpath. CI passes BASE_PATH from configure-pages; local builds fall
  // back to the same default.
  base: command === "build" ? process.env.BASE_PATH || "/sweet-tales/" : "/",
}));
