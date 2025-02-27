import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change port if needed
    open: true, // Automatically open the browser
  },
  resolve: {
    alias: {
      "@": "/src", // Allows import shortcuts (e.g., import x from "@/components/X")
    },
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000, // Prevent warnings for large chunks
  },
});
