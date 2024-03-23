import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {resolve} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  assetsInclude: ["**/*.PNG"],

  //docker
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },

  preview:{
     port: 5173, // This is the port which we will use in docker
     strictPort: true,
  },

  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
});
