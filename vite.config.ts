import { defineConfig } from "vite";
import compress from "vite-plugin-compress";

export default defineConfig({
  base: "/shadow_measurements/",
  plugins: [
    compress(),
  ],
});
