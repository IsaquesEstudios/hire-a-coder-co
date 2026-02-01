import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  
  // Mantivemos os plugins originais do Lovable
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Mantivemos as opções de SSG que já estavam aí
ssgOptions: {
    script: "async",
    formatting: "minify",
    dirStyle: 'directory', // <--- ADICIONE ESTA LINHA AQUI
  },

  // --- AQUI ESTÁ A CORREÇÃO ---
  // Isso ensina o Vite a processar essas bibliotecas corretamente durante o build
  ssr: {
    noExternal: ["react-helmet-async", "vite-react-ssg"],
  },
}));
