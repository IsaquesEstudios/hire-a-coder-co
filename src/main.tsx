import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  () => {
    return {
      // MUDANÇA AQUI:
      // Em vez de apenas "wrapper: App", usamos esta função para 
      // garantir que as propriedades (o conteúdo da página) entrem no App.
      wrapper: (props: any) => <App {...props} />
    };
  }
);
