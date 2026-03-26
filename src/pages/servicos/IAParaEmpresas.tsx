import { ArrowRight, TrendingUp, MessageSquare, Eye, Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const solutions = [
  { icon: TrendingUp, title: "Análise Preditiva", description: "Antecipe demanda e flutuações de mercado com Machine Learning." },
  { icon: MessageSquare, title: "NLP & Chatbots", description: "IA que entende contexto e intenção. Atendimento que escala infinitamente." },
  { icon: Eye, title: "Visão Computacional", description: "Automatize controle de qualidade analisando imagens em tempo real." },
];
const techStack = ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn", "AWS SageMaker"];
const phases = [
  { number: "1", title: "Data Audit", description: "Limpeza e estruturação da base de dados" },
  { number: "2", title: "Model Training", description: "Algoritmo exclusivo para sua regra de negócio" },
  { number: "3", title: "Integration", description: "Conexão com ERP, CRM ou Site" },
  { number: "4", title: "Continuous Learning", description: "O modelo melhora a cada dia" },
];
const cases = [
  { type: "VAREJO", title: "Recomendação de Produtos", result: "+35% de Ticket Médio" },
  { type: "JURÍDICO", title: "Análise de Contratos", result: "90% menos tempo de revisão" },
  { type: "INDÚSTRIA", title: "Manutenção Preditiva", result: "Previsão de falha com 48h" },
];

export default function IAParaEmpresas() {
  return (
    <Layout>
      <SEO title="IA para Empresas" description="Soluções de inteligência artificial para empresas que prevêem tendências e geram vantagem competitiva." />
      <section className="min-h-[70vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3"><p className="mono-label">Engineering the Future</p></div>
          <div className="lg:col-span-9">
            <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">Soluções de <span className="text-primary">Inteligência Artificial</span> para Empresas</h1>
            <p className="body-large text-foreground/60 mb-8">Implementamos modelos de IA personalizados que prevêem tendências e geram vantagem competitiva real.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl"><a href="#orcamento">Descobrir Potencial <ArrowRight className="w-4 h-4" /></a></Button>
              <Button asChild variant="darkOutline" size="xl"><a href="#solucoes">Ver Aplicações</a></Button>
            </div>
          </div>
        </div></div>
      </section>
      <div className="divider-dashed" />
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16"><div className="lg:col-span-3"><p className="mono-label">Aplicações</p></div><div className="lg:col-span-9"><h2 className="text-h3 font-light tracking-heading text-foreground leading-[1]">Seus dados estão dormindo. <span className="text-gradient">Nós os acordamos.</span></h2></div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {solutions.map((s) => { const Icon = s.icon; return (
              <div key={s.title} className="border border-dashed border-[#3f3f3f] p-8"><Icon className="w-5 h-5 text-primary mb-4" /><h3 className="text-h6 font-light text-foreground mb-2">{s.title}</h3><p className="text-muted-foreground text-sm font-light">{s.description}</p></div>
            ); })}
          </div>
        </div>
      </section>
      <section className="py-16 border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-10">POWERED BY STATE-OF-THE-ART TECH</p>
          <div className="flex flex-wrap justify-center gap-4">{techStack.map((t) => (<span key={t} className="border border-dashed border-[#3f3f3f] px-6 py-3 text-foreground/60 font-mono text-[0.7rem] tracking-micro uppercase">{t}</span>))}</div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">{phases.map((p) => (<div key={p.number} className="border border-dashed border-[#3f3f3f] p-8"><span className="mono-label text-primary">Fase {p.number}</span><h3 className="text-h6 font-light text-foreground mt-3 mb-2">{p.title}</h3><p className="text-muted-foreground text-sm font-light">{p.description}</p></div>))}</div>
        </div>
      </section>
      <section className="section-padding bg-background border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">RESULTADOS REAIS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">{cases.map((c) => (<div key={c.title} className="border border-dashed border-[#3f3f3f] p-8"><span className="mono-label text-primary">{c.type}</span><h3 className="text-h6 font-light text-foreground mt-3 mb-2">{c.title}</h3><p className="text-muted-foreground text-sm font-light"><span className="text-foreground">Resultado:</span> {c.result}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 border-b border-dashed border-[#3f3f3f]">
        <div className="container-custom text-center">
          <Shield className="w-8 h-8 text-primary mx-auto mb-6" />
          <h2 className="text-h3 font-light tracking-heading text-foreground mb-4">IA Responsável e <span className="text-primary">Segura</span></h2>
          <p className="text-foreground/60 font-light max-w-2xl mx-auto mb-4">Protocolos rígidos de segurança, anonimização e compliance com a LGPD.</p>
          <p className="text-foreground font-medium">O modelo é seu, a inteligência fica na sua empresa.</p>
        </div>
      </section>
      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-2xl mx-auto">
          <h2 className="text-h3 font-light tracking-heading text-foreground text-center leading-[1] mb-12">Onde a IA pode impactar seu <span className="text-primary">negócio?</span></h2>
          <ContactForm submitLabel="Agendar Diagnóstico de IA" />
        </div></div>
      </section>
    </Layout>
  );
}
