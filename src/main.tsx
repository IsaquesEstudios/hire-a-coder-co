import { ViteReactSSG } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { routes } from "./App";
import "./index.css";

// Criar QueryClient uma única vez com configurações otimizadas para SSG
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});

// Componente Wrapper que envolve todas as páginas
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

// Envolver cada rota com os providers
const wrappedRoutes = routes.map((route) => ({
  ...route,
  element: route.element ? <Providers>{route.element}</Providers> : undefined,
}));

// ViteReactSSG - passar objeto com routes
export const createRoot = ViteReactSSG({ routes: wrappedRoutes });
