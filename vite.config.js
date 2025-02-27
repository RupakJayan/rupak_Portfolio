import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Allows cleaner imports
    },
  },
  build: {
    outDir: "dist", // Ensure Vercel finds the output
    emptyOutDir: true, // Clears old builds
  },
  server: {
    port: 3000, // Optional: Change dev server port
  },
});
