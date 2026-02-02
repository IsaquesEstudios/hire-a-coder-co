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

export const createRoot = ViteReactSSG(
  { routes },
  ({ router }) => {
    // Envolver TUDO com os providers aqui mesmo
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {router}
        </TooltipProvider>
      </QueryClientProvider>
    );
  }
);
