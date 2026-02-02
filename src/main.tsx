import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  // O SEGREDO ESTÁ AQUI: 
  // Restauramos a função que diz para usar o "App" como envelope.
  // Isso carrega o QueryClient, o Toaster e o CSS global corretamente.
  () => {
    return {
      wrapper: App
    };
  }
);
