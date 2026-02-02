import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

// Sem wrappers complexos, sem helmetContext. Apenas o básico para o SSG rodar.
export const createRoot = ViteReactSSG({ 
  routes,
  rootContainer: true 
});
