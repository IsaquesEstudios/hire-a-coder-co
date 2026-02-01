import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

// A MUDANÇA ESTÁ AQUI: O nome precisa ser obrigatoriamente "createApp"
// para que o vite-ssg consiga encontrá-la durante o build.
export const createApp = ViteReactSSG(
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    // Aqui você pode fazer setups adicionais se precisar no futuro
  }
);
