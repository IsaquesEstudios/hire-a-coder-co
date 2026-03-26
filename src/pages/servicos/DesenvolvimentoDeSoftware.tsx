import { ArrowRight, Building2, Rocket, RefreshCw, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = ["Arquitetura Escalável", "Modernização de Legados", "Desenvolvimento Full-Cycle"];
const solutions = [
  { icon: Building2, title: "Software Corporativo", description: "CRM, ERP e ferramentas de gestão interna com alta segurança." },
  { icon: Rocket, title: "Produtos (SaaS)", description: "MVPs e produtos digitais escaláveis para startups." },
  { icon: RefreshCw, title: "Modernização de Legado", description: "Atualização para tecnologias modernas sem perder histórico." },
];
const phases = [
  { number: "01", title: "Discovery & Requisitos", description: "Entendimento da dor e escopo" },
  { number: "02", title: "Arquitetura de Solução", description: "Banco de dados e infra" },
  { number: "03", title: "Coding & Sprints", description: "Desenvolvimento iterativo" },
  { number: "04", title: "QA & Deploy", description: "Testes e entrega" },
];
const stats = [{ value: "+50", label: "Projetos" }, { value: "99.9%", label: "Uptime" }, { value: "Clean", label: "Architecture" }, { value: "24h", label: "Monitoramento" }];

export default function DesenvolvimentoDeSoftware() {
  return (
    <Layout>
      <SEO title="Desenvolvimento de Software" description="Desenvolvimento de software sob medida com engenharia de ponta a ponta." />
      <section className="min-h-[70vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3"><p className="mono-label">Software</p></div>
          <div className="lg:col-span-9">
            <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">Serviços de <span className="text-primary">Desenvolvimento de Software</span> Sob Medida</h1>
            <p className="body-large text-foreground/60 mb-8">Transformamos regras de negócios complexas em aplicações digitais eficientes.</p>
            <div className="flex flex-wrap gap-6 mb-8">{features.map((f) => (<div key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-foreground/70 text-sm font-light">{f}</span></div>))}</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl"><a href="#orcamento">Falar com Arquiteto <ArrowRight className="w-4 h-4" /></a></Button>
              <Button asChild variant="darkOutline" size="xl"><a href="#solucoes">Ver Stack ↓</a></Button>
            </div>
          </div>
        </div></div>
      </section>
      <div className="divider-dashed" />
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">CICLO COMPLETO DE ENGENHARIA</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {solutions.map((s) => { const Icon = s.icon; return (
              <div key={s.title} className="border border-dashed border-[#3f3f3f] p-8"><Icon className="w-5 h-5 text-primary mb-4" /><h3 className="text-h6 font-light text-foreground mb-2">{s.title}</h3><p className="text-muted-foreground text-sm font-light">{s.description}</p></div>
            ); })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-background border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">DESENVOLVIMENTO ÁGIL</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">{phases.map((p) => (<div key={p.number} className="border border-dashed border-[#3f3f3f] p-8"><span className="mono-label text-primary">Fase {p.number}</span><h3 className="text-h6 font-light text-foreground mt-3 mb-2">{p.title}</h3><p className="text-muted-foreground text-sm font-light">{p.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 border-b border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <blockquote className="text-h4 font-light tracking-heading text-foreground text-center max-w-4xl mx-auto leading-[1.1]">"A estabilidade da aplicação nos permitiu crescer 300% sem falhas <span className="text-primary">técnicas</span>."</blockquote>
          <p className="mono-label text-center mt-8">— Indústria Farmacêutica</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">{stats.map((s) => (<div key={s.label} className="text-center"><div className="text-h5 font-light text-primary">{s.value}</div><div className="mono-label mt-1">{s.label}</div></div>))}</div>
        </div>
      </section>
      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-2xl mx-auto">
          <h2 className="text-h3 font-light tracking-heading text-foreground text-center leading-[1] mb-12">Inicie seu projeto de <span className="text-primary">software</span></h2>
          <ContactForm checkboxOptions={[{ id: "novo", label: "Novo Software" }, { id: "refatoracao", label: "Refatoração" }, { id: "integracao", label: "API" }, { id: "mobile", label: "Mobile" }]} submitLabel="Solicitar Orçamento" />
        </div></div>
      </section>
    </Layout>
  );
}
