import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  // O SEGREDO ESTÁ AQUI: Envolvemos todas as rotas com o nosso App global
  () => {
    return {
      wrapper: App
    };
  }
);
