import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit (but still optimize chunks)
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          framerMotion: ["framer-motion"],
          lodash: ["lodash"],
          threejs: ["three"], // If you're using Three.js for 3D
        },
      },
    },
    minify: "terser", // Better minification than default esbuild
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },
});
