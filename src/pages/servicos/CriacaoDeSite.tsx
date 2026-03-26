import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = ["Carregamento Instantâneo", "Arquitetura para SEO", "Responsividade Total"];
const solutions = [
  { title: "Desenvolvimento Customizado", description: "Nada de templates engessados. Programação sob medida para atender exatamente à regra de negócio da sua empresa." },
  { title: "Otimização & Performance", description: "Sites ultrarrápidos que pontuam alto no Google (Core Web Vitals), garantindo melhor rankeamento." },
  { title: "Responsividade Total", description: "Layouts fluidos que se adaptam a qualquer tela. Garanta a melhor experiência para usuários mobile." },
];
const phases = [
  { number: "01", title: "Imersão e Estratégia", description: "Análise de arquitetura" },
  { number: "02", title: "UI/UX Design", description: "Prototipação de interfaces" },
  { number: "03", title: "Desenvolvimento Full-Stack", description: "Programação do front-end" },
  { number: "04", title: "Testes e Lançamento", description: "Validação e Go-Live" },
];
const stats = [{ value: "+150", label: "Projetos Entregues" }, { value: "90%", label: "Satisfação" }, { value: "+5", label: "Anos Mercado" }, { value: "24/7", label: "Suporte" }];

export default function CriacaoDeSite() {
  return (
    <Layout>
      <SEO title="Criação de Site" description="Desenvolvemos sites de alta performance para escalar seu negócio. Soluções digitais robustas e seguras com carregamento instantâneo, arquitetura para SEO e UX design focado em venda." />

      <section className="min-h-[70vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3"><p className="mono-label">Criação de Site</p></div>
            <div className="lg:col-span-9">
              <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">Desenvolvemos Sites de <span className="text-primary">Alta Performance</span> para Escalar Seu Negócio</h1>
              <p className="body-large text-foreground/60 mb-8">Soluções digitais robustas e seguras. Transformamos visitantes em clientes através de código limpo e estratégia.</p>
              <div className="flex flex-wrap gap-6 mb-8">{features.map((f) => (<div key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /><span className="text-foreground/70 text-sm font-light">{f}</span></div>))}</div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl"><a href="#orcamento">Orçar Projeto <ArrowRight className="w-4 h-4" /></a></Button>
                <Button asChild variant="darkOutline" size="xl"><a href="#solucoes">Ver Tecnologias ↓</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-dashed" />

      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="mono-label">Soluções</p></div>
            <div className="lg:col-span-9"><h2 className="text-h3 font-light tracking-heading text-foreground leading-[1]">Engenharia de software aplicada ao <span className="text-gradient">marketing</span></h2></div>
          </div>
          <div className="divider-dashed mb-0" />
          {solutions.map((s) => (<div key={s.title} className="service-card"><h3 className="text-h6 font-light text-foreground mb-2">{s.title}</h3><p className="text-muted-foreground text-sm font-light">{s.description}</p></div>))}
        </div>
      </section>

      <section className="section-padding bg-background border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <p className="spaced-text text-muted-foreground text-center mb-16">METODOLOGIA DE TRABALHO</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {phases.map((p) => (<div key={p.number} className="border border-dashed border-[#3f3f3f] p-8"><span className="mono-label text-primary">Fase {p.number}</span><h3 className="text-h6 font-light text-foreground mt-3 mb-2">{p.title}</h3><p className="text-muted-foreground text-sm font-light">{p.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <blockquote className="text-h4 font-light tracking-heading text-foreground text-center max-w-4xl mx-auto leading-[1.1]">"A competência técnica da equipe elevou o nível da nossa presença digital. O novo site carrega instantaneamente e dobrou nossa retenção de <span className="text-primary">usuários</span>."</blockquote>
          <p className="mono-label text-center mt-8">— TechSoluções Ltda.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">{stats.map((s) => (<div key={s.label} className="text-center"><div className="text-h5 font-light text-primary">{s.value}</div><div className="mono-label mt-1">{s.label}</div></div>))}</div>
        </div>
      </section>

      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <p className="spaced-text text-muted-foreground text-center mb-8">VAMOS TIRAR SUA IDEIA DO PAPEL</p>
            <h2 className="text-h3 font-light tracking-heading text-foreground text-center leading-[1] mb-12">Conte sobre seu <span className="text-primary">projeto</span></h2>
            <ContactForm checkboxOptions={[{ id: "institucional", label: "Site Institucional" }, { id: "ecommerce", label: "E-commerce" }, { id: "sistema", label: "Sistema Web" }]} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
