import { ViteReactSSG } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routes } from "./App";
import "./index.css";

// 1. Configuração do Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: false, // Importante para build falhar se a API falhar, em vez de loop infinito
    },
  },
});

// 2. Criar o Componente Raiz que envolve a aplicação
// O vite-react-ssg injetará a página atual em {children}
function App({ children }: { children?: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Aqui é onde a rota (ex: Blog, Home) será renderizada */}
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

// 3. Exportar a função passando o App como PRIMEIRO argumento
export const createRoot = ViteReactSSG(
  // Argumento 1: O Componente Raiz (que contém os Providers)
  App,
  
  // Argumento 2: Opções (Rotas)
  { routes },
  
  // Argumento 3: Callback de setup (opcional, pode deixar vazio se não usar router hooks aqui)
  ({ app, router, routes, isClient, initialState }) => {
    // Se precisar de configurações adicionais de setup, faça aqui.
    // NÃO retorne JSX aqui.
  }
);
