import type { RouteRecord } from "vite-react-ssg";
import { supabase } from "@/integrations/supabase/client";

// Imports das páginas
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Blog, { blogListLoader } from "./pages/Blog";
import BlogPost, { blogPostLoader } from "./pages/BlogPost";
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

// DEFINIÇÃO DAS ROTAS PARA O SSG
export const routes: RouteRecord[] = [
  { path: "/", element: <Index /> },
  { path: "/sobre", element: <Sobre /> },
  { 
    path: "/blog", 
    element: <Blog />,
    loader: blogListLoader,
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
    loader: blogPostLoader,
    getStaticPaths: async () => {
      try {
        const { data: posts, error } = await supabase
          .from('blog_posts')
          .select('slug')
          .eq('published', true);
        if (error) {
          console.error('SSG: Erro ao buscar slugs:', error);
          return [];
        }
        console.log('SSG: Posts encontrados:', posts?.length || 0);
        return posts?.map((post) => `/blog/${post.slug}`) || [];
      } catch (e) {
        console.error('SSG: Exceção ao buscar slugs:', e);
        return [];
      }
    },
  },
  { path: "/contato", element: <Contato /> },
  { path: "/servicos/criacao-de-site", element: <CriacaoDeSite /> },
  { path: "/servicos/criacao-de-landing-page", element: <CriacaoDeLandingPage /> },
  { path: "/servicos/criacao-de-e-commerce", element: <CriacaoDeEcommerce /> },
  { path: "/servicos/desenvolvimento-de-sistema", element: <DesenvolvimentoDeSistema /> },
  { path: "/servicos/desenvolvimento-de-software", element: <DesenvolvimentoDeSoftware /> },
  { path: "/servicos/criacao-de-automacao", element: <CriacaoDeAutomacao /> },
  { path: "/servicos/ia-para-empresas", element: <IAParaEmpresas /> },
  { path: "/mapa-do-site", element: <MapaDoSite /> },
  { path: "*", element: <NotFound /> },
];
