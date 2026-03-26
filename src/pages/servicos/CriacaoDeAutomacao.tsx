import { ArrowRight, MessageSquare, Link2, Mail, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = ["Redução de Custos", "Integração entre Softwares", "Funcionamento 24/7"];
const solutions = [
  { icon: MessageSquare, title: "Chatbots Inteligentes", description: "Robôs de WhatsApp e Instagram que respondem clientes 24h por dia." },
  { icon: Link2, title: "Conexão entre Sistemas", description: "Dados inseridos em um lugar aparecem automaticamente no outro." },
  { icon: Mail, title: "Automação de Marketing", description: "Distribuição automática de leads e disparo de e-mails pós-venda." },
];
const phases = [
  { number: "01", title: "Mapeamento de Rotina", description: "Identificação de gargalos" },
  { number: "02", title: "Desenho do Fluxo", description: "Lógica de Gatilho e Ação" },
  { number: "03", title: "Desenvolvimento", description: "APIs e Webhooks" },
  { number: "04", title: "Homologação", description: "Testes e início da operação" },
];
const stats = [{ value: "+100k", label: "Tarefas" }, { value: "0", label: "Erros Manuais" }, { value: "24/7", label: "Operação" }, { value: "+50", label: "APIs" }];

export default function CriacaoDeAutomacao() {
  return (
    <Layout>
      <SEO title="Criação de Automação" description="Automações inteligentes que conectam seus sistemas e eliminam tarefas repetitivas." />
      <section className="min-h-[70vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3"><p className="mono-label">Automação</p></div>
          <div className="lg:col-span-9">
            <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">Criação de <span className="text-primary">Automação</span> para Escalar Sua Operação</h1>
            <p className="body-large text-foreground/60 mb-8">Deixe os robôs trabalharem enquanto você foca na estratégia.</p>
            <div className="flex flex-wrap gap-6 mb-8">{features.map((f) => (<div key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-foreground/70 text-sm font-light">{f}</span></div>))}</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl"><a href="#orcamento">Automatizar <ArrowRight className="w-4 h-4" /></a></Button>
              <Button asChild variant="darkOutline" size="xl"><a href="#solucoes">Ver Exemplos ↓</a></Button>
            </div>
          </div>
        </div></div>
      </section>
      <div className="divider-dashed" />
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">LIBERDADE OPERACIONAL</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {solutions.map((s) => { const Icon = s.icon; return (
              <div key={s.title} className="border border-dashed border-[#3f3f3f] p-8"><Icon className="w-5 h-5 text-primary mb-4" /><h3 className="text-h6 font-light text-foreground mb-2">{s.title}</h3><p className="text-muted-foreground text-sm font-light">{s.description}</p></div>
            ); })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-background border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">DO MANUAL AO AUTOMÁTICO</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">{phases.map((p) => (<div key={p.number} className="border border-dashed border-[#3f3f3f] p-8"><span className="mono-label text-primary">Fase {p.number}</span><h3 className="text-h6 font-light text-foreground mt-3 mb-2">{p.title}</h3><p className="text-muted-foreground text-sm font-light">{p.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 border-b border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <blockquote className="text-h4 font-light tracking-heading text-foreground text-center max-w-4xl mx-auto leading-[1.1]">"Economizamos 40 horas semanais com a automação de <span className="text-primary">contratos</span>."</blockquote>
          <p className="mono-label text-center mt-8">— Imobiliária Digital</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">{stats.map((s) => (<div key={s.label} className="text-center"><div className="text-h5 font-light text-primary">{s.value}</div><div className="mono-label mt-1">{s.label}</div></div>))}</div>
        </div>
      </section>
      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-2xl mx-auto">
          <h2 className="text-h3 font-light tracking-heading text-foreground text-center leading-[1] mb-12">Pare de perder <span className="text-primary">tempo</span></h2>
          <ContactForm checkboxOptions={[{ id: "whatsapp", label: "WhatsApp" }, { id: "planilhas", label: "Planilhas" }, { id: "email", label: "E-mail" }, { id: "crm", label: "CRM" }]} submitLabel="Quero Automatizar" />
        </div></div>
      </section>
    </Layout>
  );
}
