import type { RouteRecord } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Imports das páginas
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contato from "./pages/Contato";
import CriacaoDeSite from "./pages/servicos/CriacaoDeSite";
import CriacaoDeLandingPage from "./pages/servicos/CriacaoDeLandingPage";
import CriacaoDeEcommerce from "./pages/servicos/CriacaoDeEcommerce";
import DesenvolvimentoDeSistema from "./pages/servicos/DesenvolvimentoDeSistema";
import DesenvolvimentoDeSoftware from "./pages/servicos/DesenvolvimentoDeSoftware";
import CriacaoDeAutomacao from "./pages/servicos/CriacaoDeAutomacao";
import IAParaEmpresas from "./pages/servicos/IAParaEmpresas";
import NotFound from "./pages/NotFound";
import MapaDoSite from "./pages/MapaDoSite";

const queryClient = new QueryClient();

// NOVO: Componente raiz que envolve todo o site de uma vez
// Isso é essencial para que o SSG funcione corretamente em todas as rotas
export const App = ({ children }: { children?: React.ReactNode }) => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

// Route definitions for SSG - Removido o AppWrapper individual
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
    getStaticPaths: async () => {
      try {
        const { data: posts, error } = await supabase
          .from('blog_posts') //
          .select('slug');

        if (error) {
          console.error("ERRO AO BUSCAR SLUGS:", error.message);
          return [];
        }

        const paths = posts?.map((post) => `/blog/${post.slug}`) || [];
        console.log("PÁGINAS DO BLOG GERADAS:", paths.length);
        return paths;
      } catch (e) {
        console.error("ERRO CRÍTICO NO BUILD:", e);
        return [];
      }
    },
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/servicos/criacao-de-site",
    element: <CriacaoDeSite />,
  },
  {
    path: "/servicos/criacao-de-landing-page",
    element: <CriacaoDeLandingPage />,
  },
  {
    path: "/servicos/criacao-de-e-commerce",
    element: <CriacaoDeEcommerce />,
  },
  {
    path: "/servicos/desenvolvimento-de-sistema",
    element: <DesenvolvimentoDeSistema />,
  },
  {
    path: "/servicos/desenvolvimento-de-software",
    element: <DesenvolvimentoDeSoftware />,
  },
  {
    path: "/servicos/criacao-de-automacao",
    element: <CriacaoDeAutomacao />,
  },
  {
    path: "/servicos/ia-para-empresas",
    element: <IAParaEmpresas />,
  },
  {
    path: "/mapa-do-site",
    element: <MapaDoSite />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
