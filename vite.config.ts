import { defineConfig } from "vite";
import compress from "vite-plugin-compression";

export default defineConfig({
  base: "/shadow_measurements/",
  plugins: [
    compress(),
  ],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
        },
      },
    },
  },
});
