import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import CriacaoDeSite from "./pages/servicos/CriacaoDeSite";
import CriacaoDeLandingPage from "./pages/servicos/CriacaoDeLandingPage";
import CriacaoDeEcommerce from "./pages/servicos/CriacaoDeEcommerce";
import DesenvolvimentoDeSistema from "./pages/servicos/DesenvolvimentoDeSistema";
import DesenvolvimentoDeSoftware from "./pages/servicos/DesenvolvimentoDeSoftware";
import CriacaoDeAutomacao from "./pages/servicos/CriacaoDeAutomacao";
import IAParaEmpresas from "./pages/servicos/IAParaEmpresas";
import NotFound from "./pages/NotFound";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/servicos/criacao-de-site" element={<CriacaoDeSite />} />
            <Route path="/servicos/criacao-de-landing-page" element={<CriacaoDeLandingPage />} />
            <Route path="/servicos/criacao-de-e-commerce" element={<CriacaoDeEcommerce />} />
            <Route path="/servicos/desenvolvimento-de-sistema" element={<DesenvolvimentoDeSistema />} />
            <Route path="/servicos/desenvolvimento-de-software" element={<DesenvolvimentoDeSoftware />} />
            <Route path="/servicos/criacao-de-automacao" element={<CriacaoDeAutomacao />} />
            <Route path="/servicos/ia-para-empresas" element={<IAParaEmpresas />} />
            <Route path="/sitemap.xml" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
