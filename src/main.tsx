// src/main.tsx
import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App"; // Importe o App aqui
import "./index.css";

export const createRoot = ViteReactSSG(
  { routes },
  () => {
    // Retornamos o wrapper para que o SSG use um único HelmetProvider
    return { wrapper: App };
  }
);
