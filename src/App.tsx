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

// Wrapper component with providers
const AppWrapper = ({ children }: { children: React.ReactNode }) => (
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

// Route definitions for SSG
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <AppWrapper><Index /></AppWrapper>,
  },
  {
    path: "/sobre",
    element: <AppWrapper><Sobre /></AppWrapper>,
  },
  {
    path: "/blog",
    element: <AppWrapper><Blog /></AppWrapper>,
  },
{
    path: "/blog/:slug",
    element: <AppWrapper><BlogPost /></AppWrapper>,
    // Esta função será executada na Vercel durante o 'vite-react-ssg build'
    getStaticPaths: async () => {
      // 1. Busca todos os slugs da sua tabela de postagens
      // IMPORTANTE: Confirme se o nome da tabela no seu Supabase é 'posts'
      const { data: posts, error } = await supabase
        .from('blog_posts') 
        .select('slug');

      if (error) {
        console.error("Erro ao buscar slugs para o build:", error);
        return [];
      }

      // 2. Mapeia os dados para o formato de URL que o SSG precisa
      // Ex: transforma 'meu-artigo' em '/blog/meu-artigo'
      return posts?.map((post) => `/blog/${post.slug}`) || [];
    },
  },
  {
    path: "/contato",
    element: <AppWrapper><Contato /></AppWrapper>,
  },
  {
    path: "/servicos/criacao-de-site",
    element: <AppWrapper><CriacaoDeSite /></AppWrapper>,
  },
  {
    path: "/servicos/criacao-de-landing-page",
    element: <AppWrapper><CriacaoDeLandingPage /></AppWrapper>,
  },
  {
    path: "/servicos/criacao-de-e-commerce",
    element: <AppWrapper><CriacaoDeEcommerce /></AppWrapper>,
  },
  {
    path: "/servicos/desenvolvimento-de-sistema",
    element: <AppWrapper><DesenvolvimentoDeSistema /></AppWrapper>,
  },
  {
    path: "/servicos/desenvolvimento-de-software",
    element: <AppWrapper><DesenvolvimentoDeSoftware /></AppWrapper>,
  },
  {
    path: "/servicos/criacao-de-automacao",
    element: <AppWrapper><CriacaoDeAutomacao /></AppWrapper>,
  },
  {
    path: "/servicos/ia-para-empresas",
    element: <AppWrapper><IAParaEmpresas /></AppWrapper>,
  },
  {
    path: "/mapa-do-site",
    element: <AppWrapper><MapaDoSite /></AppWrapper>,
  },
  {
    path: "*",
    element: <AppWrapper><NotFound /></AppWrapper>,
  },
];
