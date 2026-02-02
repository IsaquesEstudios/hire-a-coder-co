import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

export const createRoot = ViteReactSSG(
  { 
    routes,
  },
  ({ router }) => {
    // Retorna o App que já contém todos os providers necessários
    return <App>{router}</App>;
  }
);
