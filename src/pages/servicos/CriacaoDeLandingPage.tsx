import { ArrowRight, Target, Zap, Shield, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = [
  { title: "Estrutura de Persuasão (Copywriting Visual)" },
  { title: "Carregamento Instantâneo (< 1s)" },
  { title: "Otimização Mobile First" },
];

const solutions = [
  {
    title: "Foco em ROI (Retorno)",
    description: "Cada pixel é pensado para guiar o usuário ao botão de compra. Removemos distrações para aumentar sua taxa de conversão.",
  },
  {
    title: "Rastreamento Preciso",
    description: "Integração total com Pixel do Facebook, Google Analytics e Tag Manager. Saiba exatamente de onde vem seu lucro.",
  },
  {
    title: "Infraestrutura Blindada",
    description: "Servidores de alta capacidade que não caem, mesmo com picos de tráfego em grandes lançamentos.",
  },
];

const phases = [
  { number: "01", title: "Diagnóstico da Oferta", description: "Definição de público e promessa" },
  { number: "02", title: "Wireframe & Copy Visual", description: "Estrutura dos blocos de persuasão" },
  { number: "03", title: "Desenvolvimento Otimizado", description: "Codificação leve e responsiva" },
  { number: "04", title: "Setup de Tagueamento", description: "Configuração de eventos de conversão" },
];

const cases = [
  { type: "LANÇAMENTO", title: "Captura para Lançamento Semente" },
  { type: "PRODUTO FÍSICO", title: "Página de Vendas (VSL) para Suplemento" },
  { type: "INFOPRODUTO", title: "Página de Obrigado e Upsell" },
];

const stats = [
  { value: "< 1s", label: "Carregamento" },
  { value: "+200", label: "Páginas no Ar" },
  { value: "3x", label: "Mais Conversão" },
  { value: "100%", label: "Otimizado" },
];

export default function CriacaoDeLandingPage() {
  return (
    <Layout>
      <SEO
        title="Criação de Landing Page"
        description="Landing Pages de alta conversão para escalar suas vendas. Páginas projetadas cientificamente para transformar cliques em lucro, unindo design persuasivo e velocidade extrema."
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
              LANDING PAGE
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
              Landing Pages de <span className="text-primary">Alta Conversão</span> para Escalar Suas Vendas
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Não desperdice seu tráfego pago.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Criamos páginas projetadas cientificamente para transformar cliques em lucro, unindo design persuasivo e velocidade extrema.
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
                  Quero Vender Mais
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="darkOutline" size="xl">
                <a href="#solucoes">Ver Exemplos ↓</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="marquee">
          {["CONVERSÃO MÁXIMA", "PÁGINA DE VENDAS", "CAPTURA DE LEADS", "TRACKING AVANÇADO", "DESIGN ESTRATÉGICO", "CONVERSÃO MÁXIMA", "PÁGINA DE VENDAS", "CAPTURA DE LEADS", "TRACKING AVANÇADO", "DESIGN ESTRATÉGICO"].map((item, index) => (
            <span key={index} className="text-primary-foreground font-bold text-sm whitespace-nowrap flex items-center gap-2">
              {item} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Why Convert */}
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que Nossas Páginas <span className="text-primary">Convertem?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma Landing Page bonita não basta. Entregamos uma máquina de vendas equipada com tecnologia de ponta e gatilhos mentais visuais.
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
              <a href="#orcamento">Garantir Minha Página</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Do Briefing à <span className="text-primary">Venda</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Processo ágil para colocar sua oferta no ar rapidamente.
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
                  Ver Página ↗
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
              Resultados <span className="text-primary">Reais</span>
            </h2>
            <blockquote className="text-lg md:text-xl text-foreground mb-6 italic">
              "Nossa taxa de conversão subiu de 12% para 35% apenas mudando para a Landing Page desenvolvida por eles. O investimento se pagou na primeira semana de tráfego."
            </blockquote>
            <p className="text-muted-foreground font-semibold">
              Grupo Alpha — E-commerce de Nicho
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
                Aumente Suas Vendas <span className="text-primary">Agora</span>
              </h2>
              <p className="text-muted-foreground">
                Preencha para receber um orçamento de Landing Page focada em performance.
              </p>
            </div>

            <ContactForm 
              checkboxOptions={[
                { id: "captura", label: "Página de Captura" },
                { id: "vendas", label: "Página de Vendas" },
                { id: "advertorial", label: "Advertorial" },
              ]}
              submitLabel="Quero Vender Mais"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
