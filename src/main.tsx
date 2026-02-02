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

// Componente Wrapper que envolve todas as páginas
function Providers({ children }: { children: React.ReactNode }) {
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

// Envolver cada rota com os providers
const wrappedRoutes = routes.map((route) => ({
  ...route,
  element: route.element ? <Providers>{route.element}</Providers> : undefined,
}));

// ViteReactSSG - passar objeto com routes
export const createRoot = ViteReactSSG({ routes: wrappedRoutes });
