import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";
import { electrobunViteAliases } from "./.hutch/devkit/api/config/electrobun-vite";

export default defineConfig({
  plugins: lazyPlugins(() => [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ]),
  resolve: {
    alias: electrobunViteAliases(resolve(__dirname, ".hutch/devkit")),
  },
  root: "src/mainview",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
