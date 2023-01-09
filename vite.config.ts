/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */

import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      types: path.resolve(__dirname, "./src/types"),
      themes: path.resolve(__dirname, "./src/themes"),
      assets: path.resolve(__dirname, "./src/assets"),
      models: path.resolve(__dirname, "./src/models"),
    },
  },
});
