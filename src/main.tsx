import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App"; // Certifique-se de importar o App
import "./index.css";

export const createRoot = ViteReactSSG(
  { 
    routes 
  },
  // Esta função envolve a aplicação com os Providers durante o build
  ({ app }) => {
    return {
      wrapper: App
    };
  }
);
