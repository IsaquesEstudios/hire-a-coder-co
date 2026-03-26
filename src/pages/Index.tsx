import { Link } from "react-router-dom";
import { ArrowRight, Code, Rocket, Shield, Zap, Monitor, ShoppingCart, Cpu, Settings, Bot, Brain } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Monitor, title: "Criação de Site", description: "Sites de alta performance com arquitetura para SEO e design responsivo.", href: "/servicos/criacao-de-site" },
  { icon: Rocket, title: "Landing Page", description: "Páginas de alta conversão com carregamento instantâneo e foco em ROI.", href: "/servicos/criacao-de-landing-page" },
  { icon: ShoppingCart, title: "E-commerce", description: "Lojas virtuais robustas com checkout transparente e gestão simplificada.", href: "/servicos/criacao-de-e-commerce" },
  { icon: Cpu, title: "Sistemas Web", description: "Sistemas sob medida para automatizar e centralizar a operação da sua empresa.", href: "/servicos/desenvolvimento-de-sistema" },
  { icon: Settings, title: "Software", description: "Desenvolvimento full-cycle de aplicações corporativas e produtos SaaS.", href: "/servicos/desenvolvimento-de-software" },
  { icon: Bot, title: "Automação", description: "Chatbots, integrações via API e fluxos automáticos para eliminar tarefas manuais.", href: "/servicos/criacao-de-automacao" },
  { icon: Brain, title: "IA para Empresas", description: "Soluções de inteligência artificial para prever, automatizar e otimizar.", href: "/servicos/ia-para-empresas" },
];

const stats = [
  { value: "+150", label: "Projetos Entregues" },
  { value: "90%", label: "Satisfação" },
  { value: "+5", label: "Anos de Mercado" },
  { value: "24/7", label: "Suporte" },
];

const marqueeItems = ["PERFORMANCE", "SEO TÉCNICO", "SEGURANÇA DE DADOS", "DESIGN RESPONSIVO", "INTELIGÊNCIA DIGITAL", "CLEAN CODE", "METODOLOGIA ÁGIL"];

const differentials = [
  { ours: "Performance Extrema", theirs: "Sites Lentos", desc: "Core Web Vitals no verde, carregamento sub-segundo." },
  { ours: "Segurança Total", theirs: "Vulnerabilidades", desc: "Proteção de dados com as melhores práticas." },
  { ours: "Código Limpo", theirs: "Código Espaguete", desc: "Arquitetura escalável e manutenível." },
];

export default function Index() {
  return (
    <Layout>
      <SEO title="Início" description="Desenvolvimento de sites, landing pages, e-commerce, sistemas e software sob medida. Soluções digitais de alta performance para escalar seu negócio." />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-32">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 border border-border text-muted-foreground rounded-full text-xs font-medium tracking-widest mb-8 animate-fade-in">
              ENGENHARIA DE SOFTWARE APLICADA
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 leading-[0.9] tracking-tight animate-fade-in">
              Contratar um{" "}
              <span className="text-primary">Programador</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in">
              Transformamos suas ideias em produtos digitais robustos e escaláveis. Sites, sistemas e software sob medida para empresas que buscam liderar o mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild variant="hero" size="xl">
                <Link to="/contato">
                  Orçar Projeto
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="darkOutline" size="xl">
                <Link to="/servicos/criacao-de-site">Ver Serviços</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-border py-4 overflow-hidden bg-background">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="text-muted-foreground font-medium text-sm whitespace-nowrap flex items-center gap-4">
              {item} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 border border-border text-muted-foreground rounded-full text-xs font-medium tracking-widest mb-6">
              NOSSOS SERVIÇOS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Soluções <span className="text-primary">Completas</span> para Seu Negócio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light">
              Engenharia de software aplicada ao marketing e à operação. Criamos a base técnica necessária para sua empresa liderar o mercado digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} to={service.href} className="service-card group">
                  <div className="w-12 h-12 border border-border rounded-lg flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-light">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Conhecer detalhes
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials — Comparative Style */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 border border-border text-muted-foreground rounded-full text-xs font-medium tracking-widest mb-6">
                POR QUE NOS ESCOLHER
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Tecnologia de Ponta com <span className="text-primary">Foco em Resultados</span>
              </h2>
              <p className="text-muted-foreground font-light">
                Não entregamos apenas código. Criamos soluções completas que geram valor real para o seu negócio.
              </p>
            </div>

            <div className="space-y-4">
              {differentials.map((diff) => (
                <div key={diff.ours} className="flex flex-col md:flex-row items-stretch border border-border rounded-lg overflow-hidden">
                  <div className="flex-1 p-6 md:p-8 bg-primary/5 border-b md:border-b-0 md:border-r border-border">
                    <span className="text-xs text-primary font-bold tracking-widest">NOSSA ENTREGA</span>
                    <h3 className="text-xl font-bold text-foreground mt-2">{diff.ours}</h3>
                    <p className="text-muted-foreground text-sm mt-1 font-light">{diff.desc}</p>
                  </div>
                  <div className="flex-1 p-6 md:p-8 bg-background flex items-center">
                    <div>
                      <span className="text-xs text-muted-foreground/50 font-bold tracking-widest">ALTERNATIVAS</span>
                      <h3 className="text-xl font-bold text-muted-foreground/40 mt-2 line-through">{diff.theirs}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Vamos Tirar Sua Ideia do <span className="text-primary">Papel?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
            Conte sobre seu projeto e receba uma proposta técnica personalizada. Sem compromisso.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contato">
              Iniciar Conversa
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
