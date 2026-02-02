import { ViteReactSSG } from "vite-react-ssg";
import { App, routes } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

// Criamos o QueryClient aqui para garantir que ele exista no servidor e no cliente
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Importante para SSG: evita que o cliente tente refetch imediatamente
      staleTime: 1000 * 60 * 5, 
    },
  },
});

export const createRoot = ViteReactSSG(
  { 
    routes,
    rootContainer: true 
  },
  ({ initialState }) => {
    // Aqui você pode lidar com o estado inicial se necessário futuramente
    return {
      wrapper: (props: any) => (
        <QueryClientProvider client={queryClient}>
          <App {...props} />
        </QueryClientProvider>
      )
    };
  }
);
