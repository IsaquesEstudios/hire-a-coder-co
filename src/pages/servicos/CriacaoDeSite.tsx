import { Link } from "react-router-dom";
import { ArrowRight, Zap, Search, Smartphone, Code, Palette, Shield, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = [
  {
    icon: Zap,
    title: "Carregamento Instantâneo",
    description: "Sites ultrarrápidos que pontuam alto no Google (Core Web Vitals), garantindo melhor rankeamento.",
  },
  {
    icon: Search,
    title: "Arquitetura para SEO",
    description: "Estrutura técnica otimizada para indexação e rankeamento nos motores de busca.",
  },
  {
    icon: Smartphone,
    title: "Responsividade Total",
    description: "Layouts fluidos que se adaptam a qualquer tela. Garanta a melhor experiência para usuários mobile.",
  },
];

const solutions = [
  {
    title: "Desenvolvimento Customizado",
    description: "Nada de templates engessados. Programação sob medida para atender exatamente à regra de negócio da sua empresa.",
  },
  {
    title: "Otimização & Performance",
    description: "Sites ultrarrápidos que pontuam alto no Google (Core Web Vitals), garantindo melhor rankeamento.",
  },
  {
    title: "Responsividade Total",
    description: "Layouts fluidos que se adaptam a qualquer tela. Garanta a melhor experiência para usuários mobile.",
  },
];

const phases = [
  { number: "01", title: "Imersão e Estratégia", description: "Análise de arquitetura" },
  { number: "02", title: "UI/UX Design", description: "Prototipação de interfaces" },
  { number: "03", title: "Desenvolvimento Full-Stack", description: "Programação do front-end" },
  { number: "04", title: "Testes e Lançamento", description: "Validação e Go-Live" },
];

const cases = [
  { type: "E-COMMERCE", title: "Loja Virtual de Alta Performance" },
  { type: "INSTITUCIONAL", title: "Portal Corporativo para Indústria" },
  { type: "LANDING PAGE", title: "Página de Lançamento Otimizada" },
];

const stats = [
  { value: "+150", label: "Projetos Entregues" },
  { value: "99%", label: "Satisfação" },
  { value: "+5", label: "Anos Mercado" },
  { value: "24/7", label: "Suporte" },
];

export default function CriacaoDeSite() {
  return (
    <Layout>
      <SEO
        title="Criação de Site"
        description="Desenvolvemos sites de alta performance para escalar seu negócio. Soluções digitais robustas e seguras com carregamento instantâneo, arquitetura para SEO e UX design focado em venda."
      />

      {/* Hero */}
      <section className="bg-gradient-hero min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              CRIAÇÃO DE SITE
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
              Desenvolvemos Sites de <span className="text-primary">Alta Performance</span> para Escalar Seu Negócio
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Soluções digitais robustas e seguras.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Transformamos visitantes em clientes através de código limpo e estratégia.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-2 text-secondary-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#orcamento">
                  Orçar Projeto
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="darkOutline" size="xl">
                <a href="#solucoes">Ver Tecnologias ↓</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="marquee">
          {["PERFORMANCE", "SEO TÉCNICO", "SEGURANÇA DE DADOS", "DESIGN RESPONSIVO", "INTELIGÊNCIA DIGITAL", "PERFORMANCE", "SEO TÉCNICO", "SEGURANÇA DE DADOS", "DESIGN RESPONSIVO", "INTELIGÊNCIA DIGITAL"].map((item, index) => (
            <span key={index} className="text-primary-foreground font-bold text-sm whitespace-nowrap flex items-center gap-2">
              {item} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossas <span className="text-primary">Soluções</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Engenharia de software aplicada ao marketing. Criamos a base técnica necessária para sua empresa liderar o mercado digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="service-card">
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg">
              <a href="#orcamento">Conhecer Detalhes</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Metodologia de <span className="text-primary">Trabalho</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Processo estruturado para entregas ágeis e sem erros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.number} className="bg-muted rounded-lg p-6 relative overflow-hidden">
                <span className="absolute -top-4 -right-2 text-8xl font-bold text-primary/10">
                  {phase.number}
                </span>
                <div className="relative">
                  <span className="text-primary font-bold text-sm">Fase {phase.number}</span>
                  <h3 className="text-lg font-bold text-secondary-foreground mt-1 mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <div key={caseItem.title} className="service-card group cursor-pointer">
                <span className="text-primary text-xs font-bold tracking-wider">{caseItem.type}</span>
                <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>
                <Button variant="heroOutline" size="sm">
                  Ver Detalhes ↗
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Feedback de <span className="text-primary">Parceiros</span>
            </h2>
            <blockquote className="text-lg md:text-xl text-foreground mb-6 italic">
              "A competência técnica da equipe elevou o nível da nossa presença digital. O novo site carrega instantaneamente e dobrou nossa retenção de usuários."
            </blockquote>
            <p className="text-muted-foreground font-semibold">
              TechSoluções Ltda. — Setor de Inovação
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="orcamento" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
                Vamos Tirar Sua Ideia do <span className="text-primary">Papel?</span>
              </h2>
              <p className="text-muted-foreground">
                Conte sobre seu projeto e receba uma proposta técnica personalizada.
              </p>
            </div>

            <ContactForm 
              checkboxOptions={[
                { id: "institucional", label: "Site Institucional" },
                { id: "ecommerce", label: "E-commerce" },
                { id: "sistema", label: "Sistema Web" },
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
