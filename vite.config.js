import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  base: "./",
  build: {
    outDir,
    emptyOutDir: true,
    input: {
      home: resolve(root, "index.html"),
      blog1: resolve(root, "blog1.html"),
    },
  },
});
