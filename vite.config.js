import { defineConfig } from "vite";
import React from "react";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Allows cleaner imports
    },
  },
  server: {
    port: 3000, // Optional: Change dev server port
  },
  build: {
    chunkSizeWarningLimit: 3000,
    outDir: "dist", // Ensure Vercel finds the output
    emptyOutDir: true, // Clears old builds
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("three-stdlib")) {
              return "three"; // Separate Three.js
            }
            return "vendor"; // Code splitting for better performance
          }
        },
      },
    },
  },
});
