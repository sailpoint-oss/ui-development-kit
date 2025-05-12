import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import angular from "@analogjs/vite-plugin-angular";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    root: resolve("src/renderer"),
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
      },
    },
    plugins: angular(),
  },
});
