import { ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = ["Checkout Transparente", "Painel Administrativo", "Integração Logística"];
const solutions = [
  { title: "Checkout de Alta Conversão", description: "Otimizamos a página de pagamento para reduzir o abandono de carrinho." },
  { title: "Gestão Simplificada", description: "Controle estoque, pedidos e clientes em um painel fácil de usar." },
  { title: "Mobile Commerce", description: "Sua loja perfeita no celular. Navegação fluida e botões de compra acessíveis." },
];
const phases = [
  { number: "01", title: "Arquitetura do Catálogo", description: "Organização de categorias e UX" },
  { number: "02", title: "Design da Vitrine", description: "Interface visual focada no produto" },
  { number: "03", title: "Integrações (API)", description: "Pagamento e Frete" },
  { number: "04", title: "Testes de Segurança", description: "Blindagem e Go-Live" },
];
const stats = [{ value: "+R$10M", label: "Processados" }, { value: "99.9%", label: "Uptime" }, { value: "SSL", label: "Segurança" }, { value: "API", label: "Integração" }];

export default function CriacaoDeEcommerce() {
  return (
    <Layout>
      <SEO title="Criação de E-commerce" description="Lojas virtuais de alta performance para escalar seu faturamento." />
      <section className="min-h-[70vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3"><p className="mono-label">E-commerce</p></div>
          <div className="lg:col-span-9">
            <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">Lojas Virtuais de <span className="text-primary">Alta Performance</span> para Escalar Seu Faturamento</h1>
            <p className="body-large text-foreground/60 mb-8">Ecossistemas de vendas robustos, seguros e integrados.</p>
            <div className="flex flex-wrap gap-6 mb-8">{features.map((f) => (<div key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-foreground/70 text-sm font-light">{f}</span></div>))}</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl"><a href="#orcamento">Orçar E-commerce <ArrowRight className="w-4 h-4" /></a></Button>
              <Button asChild variant="darkOutline" size="xl"><a href="#solucoes">Ver Recursos ↓</a></Button>
            </div>
          </div>
        </div></div>
      </section>
      <div className="divider-dashed" />
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16"><div className="lg:col-span-3"><p className="mono-label">Tecnologia</p></div><div className="lg:col-span-9"><h2 className="text-h3 font-light tracking-heading text-foreground leading-[1]">Tecnologia que <span className="text-gradient">Vende</span></h2></div></div>
          <div className="divider-dashed mb-0" />
          {solutions.map((s) => (<div key={s.title} className="service-card"><h3 className="text-h6 font-light text-foreground mb-2">{s.title}</h3><p className="text-muted-foreground text-sm font-light">{s.description}</p></div>))}
        </div>
      </section>
      <section className="section-padding bg-background border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">DO PLANEJAMENTO À PRIMEIRA VENDA</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">{phases.map((p) => (<div key={p.number} className="border border-dashed border-[#3f3f3f] p-8"><span className="mono-label text-primary">Fase {p.number}</span><h3 className="text-h6 font-light text-foreground mt-3 mb-2">{p.title}</h3><p className="text-muted-foreground text-sm font-light">{p.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 border-b border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <blockquote className="text-h4 font-light tracking-heading text-foreground text-center max-w-4xl mx-auto leading-[1.1]">"Batemos recorde de vendas sem um único segundo de <span className="text-primary">instabilidade</span>."</blockquote>
          <p className="mono-label text-center mt-8">— MegaStore Eletrônicos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">{stats.map((s) => (<div key={s.label} className="text-center"><div className="text-h5 font-light text-primary">{s.value}</div><div className="mono-label mt-1">{s.label}</div></div>))}</div>
        </div>
      </section>
      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-2xl mx-auto">
          <p className="spaced-text text-muted-foreground text-center mb-8">MONTE SUA OPERAÇÃO ONLINE</p>
          <h2 className="text-h3 font-light tracking-heading text-foreground text-center leading-[1] mb-12">Vamos montar seu <span className="text-primary">e-commerce</span></h2>
          <ContactForm checkboxOptions={[{ id: "loja", label: "Loja Própria" }, { id: "marketplace", label: "Marketplace" }, { id: "drop", label: "Dropshipping" }]} submitLabel="Orçar Plataforma" />
        </div></div>
      </section>
    </Layout>
  );
}
