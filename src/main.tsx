import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

// Instância única para evitar múltiplos clientes
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: false, // Evita tentativas infinitas de fetch durante o build
    },
  },
});

export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  () => {
    return {
      // O wrapper envolve TODA a aplicação, inclusive no servidor
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
          <App>{children}</App>
        </QueryClientProvider>
      )
    };
  }
);
