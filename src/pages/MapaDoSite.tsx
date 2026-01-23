import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Home, Users, BookOpen, Mail, Globe, FileText, ShoppingCart, Settings, Code, Cpu, Bot } from "lucide-react";

const pages = [
  {
    category: "Principal",
    items: [
      { name: "Início", href: "/", icon: Home },
      { name: "Sobre Nós", href: "/sobre", icon: Users },
      { name: "Blog", href: "/blog", icon: BookOpen },
      { name: "Contato", href: "/contato", icon: Mail },
    ],
  },
  {
    category: "Serviços",
    items: [
      { name: "Criação de Site", href: "/servicos/criacao-de-site", icon: Globe },
      { name: "Criação de Landing Page", href: "/servicos/criacao-de-landing-page", icon: FileText },
      { name: "Criação de E-commerce", href: "/servicos/criacao-de-e-commerce", icon: ShoppingCart },
      { name: "Desenvolvimento de Sistema", href: "/servicos/desenvolvimento-de-sistema", icon: Settings },
      { name: "Desenvolvimento de Software", href: "/servicos/desenvolvimento-de-software", icon: Code },
      { name: "Criação de Automação", href: "/servicos/criacao-de-automacao", icon: Cpu },
      { name: "IA para Empresas", href: "/servicos/ia-para-empresas", icon: Bot },
    ],
  },
];

export default function MapaDoSite() {
  return (
    <Layout>
      <SEO
        title="Mapa do Site"
        description="Navegue por todas as páginas do nosso site. Encontre facilmente serviços, informações e conteúdos."
        canonical="https://contratarumprogramador.com.br/mapa-do-site"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mapa do Site
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Navegue por todas as páginas disponíveis no nosso site.
            </p>

            <div className="space-y-12">
              {pages.map((section) => (
                <div key={section.category}>
                  <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
                    {section.category}
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((page) => {
                      const Icon = page.icon;
                      return (
                        <li key={page.href}>
                          <Link
                            to={page.href}
                            className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-primary/20 transition-colors group"
                          >
                            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {page.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
