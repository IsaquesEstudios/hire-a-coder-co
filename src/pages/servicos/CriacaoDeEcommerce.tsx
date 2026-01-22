import { ArrowRight, ShoppingCart, CreditCard, Package, Smartphone, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = [
  { title: "Checkout Transparente e Seguro" },
  { title: "Painel Administrativo Intuitivo" },
  { title: "Integração com Logística e Correios" },
];

const solutions = [
  {
    title: "Checkout de Alta Conversão",
    description: "Otimizamos a página de pagamento para reduzir o abandono de carrinho. Menos cliques, mais vendas aprovadas.",
  },
  {
    title: "Gestão Simplificada",
    description: "Controle estoque, pedidos e clientes em um painel fácil de usar. Você foca no negócio, o sistema cuida da operação.",
  },
  {
    title: "Mobile Commerce",
    description: "Sua loja perfeita no celular. Navegação fluida e botões de compra acessíveis para o consumidor mobile.",
  },
];

const phases = [
  { number: "01", title: "Arquitetura do Catálogo", description: "Organização de categorias e UX" },
  { number: "02", title: "Design da Vitrine", description: "Interface visual focada no produto" },
  { number: "03", title: "Integrações (API)", description: "Conexão com Pagamento e Frete" },
  { number: "04", title: "Testes de Segurança", description: "Blindagem contra fraudes e Go-Live" },
];

const cases = [
  { type: "MODA E VESTUÁRIO", title: "E-commerce Fashion Minimalista" },
  { type: "ELETRÔNICOS / TECH", title: "Marketplace de Tecnologia" },
  { type: "DROPSHIPPING", title: "Loja Otimizada para Escala" },
];

const stats = [
  { value: "+R$ 10M", label: "Processados" },
  { value: "99.9%", label: "Uptime (No Ar)" },
  { value: "SSL", label: "Segurança Total" },
  { value: "API", label: "Full Integration" },
];

export default function CriacaoDeEcommerce() {
  return (
    <Layout>
      <SEO
        title="Criação de E-commerce"
        description="Lojas virtuais de alta performance para escalar seu faturamento. Desenvolvemos ecossistemas de vendas robustos, seguros e integrados, prontos para receber milhares de acessos."
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
              E-COMMERCE
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
              Lojas Virtuais de <span className="text-primary">Alta Performance</span> para Escalar Seu Faturamento
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Não entregamos apenas uma loja bonita.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Desenvolvemos ecossistemas de vendas robustos, seguros e integrados, prontos para receber milhares de acessos sem travar.
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
                  Orçar Meu E-commerce
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="darkOutline" size="xl">
                <a href="#solucoes">Ver Recursos ↓</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="marquee">
          {["E-COMMERCE", "CHECKOUT TRANSPARENTE", "GATEWAY DE PAGAMENTO", "GESTÃO DE ESTOQUE", "API DE FRETE", "SEGURANÇA SSL", "E-COMMERCE", "CHECKOUT TRANSPARENTE", "GATEWAY DE PAGAMENTO", "GESTÃO DE ESTOQUE"].map((item, index) => (
            <span key={index} className="text-primary-foreground font-bold text-sm whitespace-nowrap flex items-center gap-2">
              {item} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnologia que <span className="text-primary">Vende</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A experiência de compra do seu cliente precisa ser perfeita. Eliminamos fricções técnicas para garantir que o visitante finalize a compra.
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
              <a href="#orcamento">Ver Todos os Recursos</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Do Planejamento à <span className="text-primary">Primeira Venda</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desenvolvimento estruturado para garantir segurança nas transações financeiras.
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
                  Ver Loja ↗
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
              Quem Já <span className="text-primary">Vende Muito</span>
            </h2>
            <blockquote className="text-lg md:text-xl text-foreground mb-6 italic">
              "Nosso antigo site caía sempre na Black Friday. Com a nova plataforma desenvolvida, batemos recorde de vendas sem um único segundo de instabilidade."
            </blockquote>
            <p className="text-muted-foreground font-semibold">
              MegaStore Eletrônicos — Diretoria
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
                Vamos Montar Sua <span className="text-primary">Operação Online?</span>
              </h2>
              <p className="text-muted-foreground">
                Preencha os dados abaixo para analisarmos a viabilidade do seu e-commerce.
              </p>
            </div>

            <ContactForm 
              checkboxOptions={[
                { id: "loja-propria", label: "Loja Própria" },
                { id: "marketplace", label: "Marketplace" },
                { id: "dropshipping", label: "Dropshipping" },
              ]}
              submitLabel="Orçar Plataforma"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
