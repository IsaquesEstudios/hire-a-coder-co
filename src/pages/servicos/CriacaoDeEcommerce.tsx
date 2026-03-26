import { ArrowRight, CheckCircle } from "lucide-react";
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
  { title: "Checkout de Alta Conversão", description: "Otimizamos a página de pagamento para reduzir o abandono de carrinho. Menos cliques, mais vendas aprovadas." },
  { title: "Gestão Simplificada", description: "Controle estoque, pedidos e clientes em um painel fácil de usar. Você foca no negócio, o sistema cuida da operação." },
  { title: "Mobile Commerce", description: "Sua loja perfeita no celular. Navegação fluida e botões de compra acessíveis para o consumidor mobile." },
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

const marqueeItems = ["E-COMMERCE", "CHECKOUT TRANSPARENTE", "GATEWAY DE PAGAMENTO", "GESTÃO DE ESTOQUE", "API DE FRETE"];

export default function CriacaoDeEcommerce() {
  return (
    <Layout>
      <SEO title="Criação de E-commerce" description="Lojas virtuais de alta performance para escalar seu faturamento. Desenvolvemos ecossistemas de vendas robustos, seguros e integrados, prontos para receber milhares de acessos." />

      <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-background pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 border border-border text-muted-foreground rounded-full text-xs font-medium tracking-widest mb-6">E-COMMERCE</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 leading-[0.95] tracking-tight">Lojas Virtuais de <span className="text-primary">Alta Performance</span> para Escalar Seu Faturamento</h1>
            <p className="text-lg text-muted-foreground mb-4 font-light">Não entregamos apenas uma loja bonita.</p>
            <p className="text-lg text-muted-foreground mb-8 font-light">Desenvolvemos ecossistemas de vendas robustos, seguros e integrados, prontos para receber milhares de acessos sem travar.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((f) => (<div key={f.title} className="flex items-center gap-2 text-foreground"><CheckCircle className="w-4 h-4 text-primary" /><span className="font-medium text-sm">{f.title}</span></div>))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl"><a href="#orcamento">Orçar Meu E-commerce <ArrowRight className="w-5 h-5" /></a></Button>
              <Button asChild variant="darkOutline" size="xl"><a href="#solucoes">Ver Recursos ↓</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-4 overflow-hidden bg-background">
        <div className="marquee">{[...marqueeItems, ...marqueeItems].map((item, i) => (<span key={i} className="text-muted-foreground font-medium text-sm whitespace-nowrap flex items-center gap-4">{item} <span className="text-primary">✦</span></span>))}</div>
      </section>

      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Tecnologia que <span className="text-primary">Vende</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light">A experiência de compra do seu cliente precisa ser perfeita. Eliminamos fricções técnicas para garantir que o visitante finalize a compra.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">{solutions.map((s) => (<div key={s.title} className="service-card"><h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3><p className="text-muted-foreground font-light">{s.description}</p></div>))}</div>
          <div className="text-center mt-10"><Button asChild variant="hero" size="lg"><a href="#orcamento">Ver Todos os Recursos</a></Button></div>
        </div>
      </section>

      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Do Planejamento à <span className="text-primary">Primeira Venda</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light">Desenvolvimento estruturado para garantir segurança nas transações financeiras.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">{phases.map((p) => (<div key={p.number} className="border border-border rounded-lg p-6 relative overflow-hidden bg-background"><span className="absolute -top-4 -right-2 text-8xl font-bold text-primary/5">{p.number}</span><div className="relative"><span className="text-primary font-bold text-sm">Fase {p.number}</span><h3 className="text-lg font-bold text-foreground mt-1 mb-2">{p.title}</h3><p className="text-muted-foreground text-sm font-light">{p.description}</p></div></div>))}</div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-4">{cases.map((c) => (<div key={c.title} className="service-card group cursor-pointer"><span className="text-primary text-xs font-bold tracking-wider">{c.type}</span><h3 className="text-xl font-bold mt-2 mb-4 text-foreground group-hover:text-primary transition-colors">{c.title}</h3><Button variant="heroOutline" size="sm">Ver Loja ↗</Button></div>))}</div>
        </div>
      </section>

      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight">Quem Já <span className="text-primary">Vende Muito</span></h2>
            <blockquote className="text-lg md:text-xl text-foreground mb-6 italic font-light">"Nosso antigo site caía sempre na Black Friday. Com a nova plataforma desenvolvida, batemos recorde de vendas sem um único segundo de instabilidade."</blockquote>
            <p className="text-muted-foreground font-semibold">MegaStore Eletrônicos — Diretoria</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">{stats.map((s) => (<div key={s.label} className="text-center"><div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</div><div className="text-xs text-muted-foreground tracking-wider uppercase">{s.label}</div></div>))}</div>
        </div>
      </section>

      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Vamos Montar Sua <span className="text-primary">Operação Online?</span></h2>
              <p className="text-muted-foreground font-light">Preencha os dados abaixo para analisarmos a viabilidade do seu e-commerce.</p>
            </div>
            <div className="border border-border rounded-2xl p-8 bg-card">
              <ContactForm checkboxOptions={[{ id: "loja-propria", label: "Loja Própria" }, { id: "marketplace", label: "Marketplace" }, { id: "dropshipping", label: "Dropshipping" }]} submitLabel="Orçar Plataforma" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
