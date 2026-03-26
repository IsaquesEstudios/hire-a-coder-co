import { ArrowRight, Database, Cloud, BarChart3, Link2, Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const benefits = [
  { icon: Database, title: "Centralização de Dados", description: "Unifique informações de vendas, estoque e financeiro em um único lugar." },
  { icon: BarChart3, title: "Automação Operacional", description: "Reduza custos operacionais automatizando tarefas repetitivas." },
  { icon: Cloud, title: "Acesso Nuvem (SaaS)", description: "Acesse relatórios e controle a operação de qualquer lugar." },
  { icon: BarChart3, title: "Dashboards e BI", description: "Painéis visuais com lucro, gargalos e métricas em tempo real." },
  { icon: Link2, title: "Integrações via API", description: "Conecte com Pagamento, WhatsApp, CRMs e Emissores de Notas." },
  { icon: Shield, title: "Controle de Permissões", description: "Hierarquias de acesso para cada funcionário." },
];
const phases = [
  { number: "1", title: "Mapeamento de Processos", description: "Entender a regra de negócio" },
  { number: "2", title: "Prototipação e UX", description: "Desenho das telas" },
  { number: "3", title: "Codificação", description: "Back-end e Front-end" },
  { number: "4", title: "Testes e Deploy", description: "Implementação no servidor" },
];

export default function DesenvolvimentoDeSistema() {
  return (
    <Layout>
      <SEO title="Desenvolvimento de Sistema" description="Sistemas web e softwares sob medida. Substitua planilhas por uma plataforma própria." />
      <section className="min-h-[70vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3"><p className="mono-label">Sistemas Web</p></div>
          <div className="lg:col-span-9">
            <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">Desenvolvimento de <span className="text-primary">Sistemas Web</span> e Softwares Sob Medida</h1>
            <p className="body-large text-foreground/60 mb-8">Substitua planilhas manuais por uma plataforma própria, segura e escalável.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl"><a href="#orcamento">Falar com Engenheiro <ArrowRight className="w-4 h-4" /></a></Button>
              <Button asChild variant="darkOutline" size="xl"><a href="#beneficios">Ver Funcionalidades</a></Button>
            </div>
          </div>
        </div></div>
      </section>
      <div className="divider-dashed" />
      <section id="beneficios" className="section-padding bg-background">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">POR QUE INVESTIR EM SISTEMAS?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {benefits.map((b) => { const Icon = b.icon; return (
              <div key={b.title} className="border border-dashed border-[#3f3f3f] p-8"><Icon className="w-5 h-5 text-primary mb-4" /><h3 className="text-h6 font-light text-foreground mb-2">{b.title}</h3><p className="text-muted-foreground text-sm font-light">{b.description}</p></div>
            ); })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-background border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">ETAPAS DO DESENVOLVIMENTO</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">{phases.map((p) => (<div key={p.number} className="border border-dashed border-[#3f3f3f] p-8"><span className="mono-label text-primary">Fase {p.number}</span><h3 className="text-h6 font-light text-foreground mt-3 mb-2">{p.title}</h3><p className="text-muted-foreground text-sm font-light">{p.description}</p></div>))}</div>
        </div>
      </section>
      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-2xl mx-auto">
          <p className="spaced-text text-muted-foreground text-center mb-8">SOFTWARE EXCLUSIVO</p>
          <h2 className="text-h3 font-light tracking-heading text-foreground text-center leading-[1] mb-12">Sua empresa precisa de um <span className="text-primary">sistema?</span></h2>
          <ContactForm submitLabel="Cotar Sistema Personalizado" />
        </div></div>
      </section>
    </Layout>
  );
}
