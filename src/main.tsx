import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

// A MUDANÇA ESTÁ AQUI: O nome precisa ser obrigatoriamente "createApp"
// para que o vite-ssg consiga encontrá-la durante o build.
// src/main.tsx
// ... imports

// Mude de volta para createRoot
export const createRoot = ViteReactSSG(
  { routes },
  // ... o resto do código continua igual
);
