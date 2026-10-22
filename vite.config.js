import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // prefix "" = muat semua variabel, bukan hanya yang berawalan VITE_
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    define: {
      __GRAPESJS_LICENSE_KEY__: JSON.stringify(env.GRAPESJS_LICENSE_KEY),
    },
  };
});
