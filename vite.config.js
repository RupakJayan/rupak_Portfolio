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
  server: {
    port: 3000, // Optional: Change dev server port
  },
  build: {
    outDir: "dist", // Ensure Vercel finds the output
    emptyOutDir: true, // Clears old builds
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Code splitting for better performance
          }
        },
      },
    },
  },
});
