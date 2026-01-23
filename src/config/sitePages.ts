import { Home, Users, BookOpen, Mail, Globe, FileText, ShoppingCart, Settings, Code, Cpu, Bot, Map } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SitePage {
  name: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: number;
}

export interface SiteSection {
  category: string;
  items: SitePage[];
}

// Páginas principais do site
export const mainPages: SitePage[] = [
  { 
    name: "Início", 
    href: "/", 
    icon: Home,
    description: "Página inicial",
    changefreq: "weekly",
    priority: 1.0
  },
  { 
    name: "Sobre Nós", 
    href: "/sobre", 
    icon: Users,
    description: "Conheça nossa empresa",
    changefreq: "monthly",
    priority: 0.8
  },
  { 
    name: "Blog", 
    href: "/blog", 
    icon: BookOpen,
    description: "Artigos e novidades",
    changefreq: "daily",
    priority: 0.9
  },
  { 
    name: "Contato", 
    href: "/contato", 
    icon: Mail,
    description: "Entre em contato",
    changefreq: "monthly",
    priority: 0.7
  },
  { 
    name: "Mapa do Site", 
    href: "/mapa-do-site", 
    icon: Map,
    description: "Todas as páginas",
    changefreq: "monthly",
    priority: 0.5
  },
];

// Páginas de serviços
export const servicePages: SitePage[] = [
  { 
    name: "Criação de Site", 
    href: "/servicos/criacao-de-site", 
    icon: Globe,
    description: "Sites profissionais e responsivos",
    changefreq: "monthly",
    priority: 0.8
  },
  { 
    name: "Criação de Landing Page", 
    href: "/servicos/criacao-de-landing-page", 
    icon: FileText,
    description: "Páginas de conversão otimizadas",
    changefreq: "monthly",
    priority: 0.8
  },
  { 
    name: "Criação de E-commerce", 
    href: "/servicos/criacao-de-e-commerce", 
    icon: ShoppingCart,
    description: "Lojas virtuais completas",
    changefreq: "monthly",
    priority: 0.8
  },
  { 
    name: "Desenvolvimento de Sistema", 
    href: "/servicos/desenvolvimento-de-sistema", 
    icon: Settings,
    description: "Sistemas personalizados",
    changefreq: "monthly",
    priority: 0.8
  },
  { 
    name: "Desenvolvimento de Software", 
    href: "/servicos/desenvolvimento-de-software", 
    icon: Code,
    description: "Software sob medida",
    changefreq: "monthly",
    priority: 0.8
  },
  { 
    name: "Criação de Automação", 
    href: "/servicos/criacao-de-automacao", 
    icon: Cpu,
    description: "Automação de processos",
    changefreq: "monthly",
    priority: 0.8
  },
  { 
    name: "IA para Empresas", 
    href: "/servicos/ia-para-empresas", 
    icon: Bot,
    description: "Inteligência artificial aplicada",
    changefreq: "monthly",
    priority: 0.8
  },
];

// Todas as seções organizadas
export const siteSections: SiteSection[] = [
  {
    category: "Principal",
    items: mainPages.filter(p => p.href !== "/mapa-do-site"), // Exclui o próprio mapa do site da listagem
  },
  {
    category: "Serviços",
    items: servicePages,
  },
];

// Todas as páginas estáticas (para sitemap)
export const allStaticPages: SitePage[] = [...mainPages, ...servicePages];
