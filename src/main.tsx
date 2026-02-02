import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import "./index.css";

export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  // O parâmetro 'helmetContext' é injetado pelo Vite durante o processo de build
  ({ helmetContext }) => {
    return {
      wrapper: (props) => <App {...props} helmetContext={helmetContext} />
    };
  }
);
