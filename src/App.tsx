import type { RouteRecord } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
    // Dynamic paths - will be pre-rendered during build
    getStaticPaths: async () => {
      // Return empty array - dynamic pages will be rendered on-demand
      // Or fetch slugs from API during build
      return [];
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
