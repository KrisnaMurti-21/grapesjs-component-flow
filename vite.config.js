import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  define: {
    __GRAPESJS_LICENSE_KEY__: JSON.stringify(env.GRAPESJS_LICENSE_KEY),
  },
});
