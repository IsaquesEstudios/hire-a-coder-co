import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  // O segredo para o SEO funcionar no SSG:
  () => {
    return {
      wrapper: App
    };
  }
);
