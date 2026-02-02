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
  
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Configurações do SSG
  ssgOptions: {
    // Evita condição de corrida no primeiro carregamento (especialmente no mobile)
    // que pode gerar requests como: static-loader-data-manifest-undefined.json
    script: "defer",
    formatting: "minify",
    dirStyle: 'directory',
  },

  // CORREÇÃO CRÍTICA: Isso garante que o React Query funcione durante o SSR/SSG
ssr: {
  noExternal: ["@tanstack/react-query"],
},
}));
