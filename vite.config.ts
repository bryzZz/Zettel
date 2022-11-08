/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      types: path.resolve(__dirname, "./src/types"),
    },
  },
});
