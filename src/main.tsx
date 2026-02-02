import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

/**
 * CONFIGURAÇÃO MÍNIMA
 * Removido o wrapper de contexto que buscava o Helmet.
 */
export const createRoot = ViteReactSSG({ 
  routes,
  rootContainer: true 
});
