import { Link } from "react-router-dom";
import { ArrowRight, Code, Rocket, Shield, Zap, Monitor, ShoppingCart, Cpu, Settings, Bot, Brain } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    title: "Criação de Site",
    description: "Sites de alta performance com arquitetura para SEO e design responsivo.",
    href: "/servicos/criacao-de-site",
  },
  {
    icon: Rocket,
    title: "Landing Page",
    description: "Páginas de alta conversão com carregamento instantâneo e foco em ROI.",
    href: "/servicos/criacao-de-landing-page",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais robustas com checkout transparente e gestão simplificada.",
    href: "/servicos/criacao-de-e-commerce",
  },
  {
    icon: Cpu,
    title: "Sistemas Web",
    description: "Sistemas sob medida para automatizar e centralizar a operação da sua empresa.",
    href: "/servicos/desenvolvimento-de-sistema",
  },
  {
    icon: Settings,
    title: "Software",
    description: "Desenvolvimento full-cycle de aplicações corporativas e produtos SaaS.",
    href: "/servicos/desenvolvimento-de-software",
  },
  {
    icon: Bot,
    title: "Automação",
    description: "Chatbots, integrações via API e fluxos automáticos para eliminar tarefas manuais.",
    href: "/servicos/criacao-de-automacao",
  },
  {
    icon: Brain,
    title: "IA para Empresas",
    description: "Soluções de inteligência artificial para prever, automatizar e otimizar.",
    href: "/servicos/ia-para-empresas",
  },
];

const stats = [
  { value: "+150", label: "Projetos Entregues" },
  { value: "99%", label: "Satisfação" },
  { value: "+5", label: "Anos de Mercado" },
  { value: "24/7", label: "Suporte" },
];

const marqueeItems = [
  "PERFORMANCE",
  "SEO TÉCNICO",
  "SEGURANÇA DE DADOS",
  "DESIGN RESPONSIVO",
  "INTELIGÊNCIA DIGITAL",
  "CLEAN CODE",
  "METODOLOGIA ÁGIL",
];

export default function Index() {
  return (
    <Layout>
      <SEO 
        title="Início" 
        description="Desenvolvimento de sites, landing pages, e-commerce, sistemas e software sob medida. Soluções digitais de alta performance para escalar seu negócio."
      />

      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in">
              ENGENHARIA DE SOFTWARE APLICADA
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight animate-fade-in">
              Desenvolvemos <span className="text-primary">Soluções Digitais</span> de Alta Performance
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
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

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="text-primary-foreground font-bold text-sm whitespace-nowrap flex items-center gap-2">
              {item} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent text-foreground rounded-full text-sm font-semibold mb-4">
              NOSSOS SERVIÇOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluções <span className="text-primary">Completas</span> para Seu Negócio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Engenharia de software aplicada ao marketing e à operação. Criamos a base técnica necessária para sua empresa liderar o mercado digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  to={service.href}
                  className="service-card group"
                >
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="w-7 h-7 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
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

      {/* Why Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-semibold mb-4">
                POR QUE NOS ESCOLHER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
                Tecnologia de Ponta com <span className="text-primary">Foco em Resultados</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Não entregamos apenas código. Criamos soluções completas que geram valor real para o seu negócio, com metodologia ágil e suporte contínuo.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Performance Extrema", desc: "Sites ultrarrápidos que pontuam alto no Google Core Web Vitals." },
                  { icon: Shield, title: "Segurança Total", desc: "Proteção de dados com as melhores práticas de segurança." },
                  { icon: Code, title: "Código Limpo", desc: "Arquitetura escalável e manutenível para o longo prazo." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-secondary-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Code className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-secondary-foreground mb-2">Clean Code</h3>
                  <p className="text-muted-foreground">Arquitetura moderna e escalável</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl shadow-glow flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">5+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Vamos Tirar Sua Ideia do Papel?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Conte sobre seu projeto e receba uma proposta técnica personalizada. Sem compromisso.
          </p>
          <Button asChild variant="dark" size="xl">
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
