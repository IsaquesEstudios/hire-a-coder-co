import { ViteReactSSG } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routes } from "./App";
import "./index.css";

// Criar QueryClient uma única vez
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: false,
    },
  },
});

// 1. Defina o Componente Raiz (Wrapper)
// Este componente recebe { children } que será o conteúdo da página atual renderizada pelo router
function App({ children }: { children?: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

// 2. Chame o ViteReactSSG passando o App como PRIMEIRO argumento
export const createRoot = ViteReactSSG(
  // Argumento 1: O Componente App
  App,
  
  // Argumento 2: As Opções (Rotas)
  { routes },
  
  // Argumento 3: Setup (opcional)
  // Deixe vazio ou use apenas para configurações que não envolvam renderização (ex: head management)
  () => {
    // NADA deve ser retornado aqui para fins de renderização de providers
  }
);
