// src/main.tsx completo
import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  ({ helmetContext }) => {
    return {
      // É vital passar o helmetContext aqui para o wrapper
      wrapper: (props: any) => <App {...props} helmetContext={helmetContext} />
    };
  }
);
