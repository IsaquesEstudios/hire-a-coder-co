import { Link } from "react-router-dom";
import { ArrowRight, Monitor, ShoppingCart, Cpu, Settings, Bot, Brain, Rocket } from "lucide-react";
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

const marqueeText = "ONDE OUTROS USAM TEMPLATES, NÓS PROJETAMOS ENGENHARIA. ONDE OUTROS ENTREGAM PÁGINAS, NÓS ENTREGAMOS PERFORMANCE. ONDE OUTROS PARAM NO VISUAL, NÓS ESCALAMOS O NEGÓCIO.";

const industries = [
  "Criação de Site",
  "Landing Page",
  "E-commerce",
  "Sistemas Web",
  "Software Sob Medida",
  "Automação",
  "Inteligência Artificial",
  "Integração API",
];

export default function Index() {
  return (
    <Layout>
      <SEO title="Início" description="Desenvolvimento de sites, landing pages, e-commerce, sistemas e software sob medida. Soluções digitais de alta performance para escalar seu negócio." />

      {/* ===== HERO SECTION — Full screen, TitanGate style ===== */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
        {/* Background subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-6">
          {/* Micro label */}
          <p className="spaced-text text-muted-foreground mb-8 animate-fade-in">
            ENGENHARIA DE SOFTWARE APLICADA
          </p>

          {/* Display heading */}
          <h1 className="display-heading text-display text-center text-foreground max-w-[80vw] animate-fade-in">
            Contratar um{" "}
            <span className="text-primary">Programador</span>
          </h1>
        </div>

        {/* Bottom bar with stats */}
        <div className="relative z-10 w-full px-6 md:px-12 pb-8">
          <div className="divider-dashed mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="body-large text-foreground/80 max-w-lg">
              Transformamos suas ideias em produtos digitais robustos e escaláveis.
            </p>
            <div className="flex gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-right">
                  <div className="text-h5 font-light text-primary">{stat.value}</div>
                  <div className="mono-label mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE — Spaced text running across ===== */}
      <section className="border-y border-dashed border-[#3f3f3f] py-5 overflow-hidden bg-background">
        <div className="marquee">
          {[marqueeText, marqueeText].map((text, i) => (
            <span key={i} className="spaced-text text-muted-foreground whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* ===== INTRO SECTION — "Elite" style with large text + description ===== */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
            {/* Left - Micro label */}
            <div className="lg:col-span-3">
              <p className="mono-label">Nossos Serviços</p>
            </div>

            {/* Right - Large text */}
            <div className="lg:col-span-9">
              <h2 className="text-h3 font-light tracking-heading text-foreground leading-[1] mb-8">
                Soluções <span className="text-gradient">Completas</span> para Seu Negócio
              </h2>
              <p className="body-large text-foreground/60 max-w-2xl">
                Engenharia de software aplicada ao marketing e à operação. Criamos a base técnica necessária para sua empresa liderar o mercado digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES LIST — Minimal, TitanGate-style list ===== */}
      <section className="bg-background pb-20 md:pb-32">
        <div className="container-custom">
          <div className="divider-dashed mb-0" />
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                to={service.href}
                className="service-card group flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              >
                <div className="flex items-center gap-4 md:w-1/3">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <h3 className="text-h6 font-light text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm font-light md:flex-1">
                  {service.description}
                </p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== INDUSTRIES / SPECIALTIES — TitanGate grid style ===== */}
      <section className="section-padding bg-background border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="spaced-text text-muted-foreground mb-8">
              ESPECIALIZAÇÃO EM TECNOLOGIA QUE TRANSFORMA NEGÓCIOS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {industries.map((industry, i) => (
              <div
                key={industry}
                className="border border-dashed border-[#3f3f3f] p-8 md:p-10 flex items-center justify-center text-center group hover:bg-foreground/[0.02] transition-colors"
              >
                <h3 className="text-h6 font-light text-foreground group-hover:text-primary transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION SECTION — Large statement ===== */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="mono-label">Nossa Visão</p>
            </div>
            <div className="lg:col-span-9">
              <p className="text-h4 font-light tracking-heading text-foreground leading-[1.05] mb-12">
                Não entregamos apenas código. Criamos soluções completas que geram valor real para o seu negócio, com metodologia ágil e suporte contínuo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contato">
                    Orçar Projeto
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="darkOutline" size="xl">
                  <Link to="/sobre">Sobre Nós</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA — Simple, powerful ===== */}
      <section className="py-32 md:py-48 bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom text-center">
          <p className="spaced-text text-muted-foreground mb-8">VAMOS TIRAR SUA IDEIA DO PAPEL</p>
          <h2 className="text-h2 font-light tracking-heading text-foreground mb-12 max-w-4xl mx-auto leading-[0.95]">
            Conte sobre seu projeto e receba uma proposta técnica{" "}
            <span className="text-primary">personalizada</span>.
          </h2>
          <Button asChild variant="hero" size="xl">
            <Link to="/contato">
              Iniciar Conversa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
