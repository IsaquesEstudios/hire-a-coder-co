import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

/**
 * CONFIGURAÇÃO DE ROOT PARA VITE SSG
 * Passamos o helmetContext do build para o wrapper do App.
 */
export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  ({ helmetContext }) => {
    // Retornamos o wrapper passando todas as props, incluindo o contexto do Helmet
    return {
      wrapper: (props: any) => <App {...props} helmetContext={helmetContext} />
    };
  }
);
