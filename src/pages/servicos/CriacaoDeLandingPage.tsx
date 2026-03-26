import { ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = ["Estrutura de Persuasão", "Carregamento < 1s", "Mobile First"];
const solutions = [
  { title: "Foco em ROI", description: "Cada pixel é pensado para guiar o usuário ao botão de compra. Removemos distrações para aumentar sua taxa de conversão." },
  { title: "Rastreamento Preciso", description: "Integração total com Pixel do Facebook, Google Analytics e Tag Manager." },
  { title: "Infraestrutura Blindada", description: "Servidores de alta capacidade que não caem, mesmo com picos de tráfego." },
];
const phases = [
  { number: "01", title: "Diagnóstico da Oferta", description: "Definição de público e promessa" },
  { number: "02", title: "Wireframe & Copy", description: "Estrutura dos blocos de persuasão" },
  { number: "03", title: "Desenvolvimento", description: "Codificação leve e responsiva" },
  { number: "04", title: "Tagueamento", description: "Configuração de eventos de conversão" },
];
const stats = [{ value: "< 1s", label: "Carregamento" }, { value: "+200", label: "Páginas no Ar" }, { value: "3x", label: "Mais Conversão" }, { value: "100%", label: "Otimizado" }];

export default function CriacaoDeLandingPage() {
  return (
    <Layout>
      <SEO title="Criação de Landing Page" description="Landing Pages de alta conversão para escalar suas vendas." />
      <section className="min-h-[70vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3"><p className="mono-label">Landing Page</p></div>
          <div className="lg:col-span-9">
            <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">Landing Pages de <span className="text-primary">Alta Conversão</span> para Escalar Suas Vendas</h1>
            <p className="body-large text-foreground/60 mb-8">Criamos páginas projetadas cientificamente para transformar cliques em lucro.</p>
            <div className="flex flex-wrap gap-6 mb-8">{features.map((f) => (<div key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-foreground/70 text-sm font-light">{f}</span></div>))}</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl"><a href="#orcamento">Quero Vender Mais <ArrowRight className="w-4 h-4" /></a></Button>
              <Button asChild variant="darkOutline" size="xl"><a href="#solucoes">Ver Exemplos ↓</a></Button>
            </div>
          </div>
        </div></div>
      </section>
      <div className="divider-dashed" />
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16"><div className="lg:col-span-3"><p className="mono-label">Por que Convertem?</p></div><div className="lg:col-span-9"><h2 className="text-h3 font-light tracking-heading text-foreground leading-[1]">Uma máquina de vendas com <span className="text-gradient">tecnologia de ponta</span></h2></div></div>
          <div className="divider-dashed mb-0" />
          {solutions.map((s) => (<div key={s.title} className="service-card"><h3 className="text-h6 font-light text-foreground mb-2">{s.title}</h3><p className="text-muted-foreground text-sm font-light">{s.description}</p></div>))}
        </div>
      </section>
      <section className="section-padding bg-background border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">DO BRIEFING À VENDA</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">{phases.map((p) => (<div key={p.number} className="border border-dashed border-[#3f3f3f] p-8"><span className="mono-label text-primary">Fase {p.number}</span><h3 className="text-h6 font-light text-foreground mt-3 mb-2">{p.title}</h3><p className="text-muted-foreground text-sm font-light">{p.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 border-b border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <blockquote className="text-h4 font-light tracking-heading text-foreground text-center max-w-4xl mx-auto leading-[1.1]">"Nossa taxa de conversão subiu de 12% para 35% apenas mudando para a Landing Page desenvolvida por eles."</blockquote>
          <p className="mono-label text-center mt-8">— Grupo Alpha</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">{stats.map((s) => (<div key={s.label} className="text-center"><div className="text-h5 font-light text-primary">{s.value}</div><div className="mono-label mt-1">{s.label}</div></div>))}</div>
        </div>
      </section>
      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-2xl mx-auto">
          <p className="spaced-text text-muted-foreground text-center mb-8">AUMENTE SUAS VENDAS AGORA</p>
          <h2 className="text-h3 font-light tracking-heading text-foreground text-center leading-[1] mb-12">Receba um orçamento <span className="text-primary">focado em performance</span></h2>
          <ContactForm checkboxOptions={[{ id: "captura", label: "Captura" }, { id: "vendas", label: "Vendas" }, { id: "advertorial", label: "Advertorial" }]} submitLabel="Quero Vender Mais" />
        </div></div>
      </section>
    </Layout>
  );
}
