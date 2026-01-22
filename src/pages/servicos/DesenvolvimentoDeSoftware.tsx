import { ArrowRight, Building2, Rocket, RefreshCw, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = [
  { title: "Arquitetura de Software Escalável" },
  { title: "Modernização de Sistemas Legados" },
  { title: "Desenvolvimento Full-Cycle" },
];

const solutions = [
  {
    icon: Building2,
    title: "Software Corporativo (Enterprise)",
    description: "Aplicações robustas para grandes operações. CRM, ERP e ferramentas de gestão interna com alta segurança de dados.",
  },
  {
    icon: Rocket,
    title: "Desenvolvimento de Produtos (SaaS)",
    description: "Criação de MVPs e produtos digitais escaláveis para startups e empresas que vendem tecnologia como serviço.",
  },
  {
    icon: RefreshCw,
    title: "Modernização de Legado",
    description: "Atualizamos softwares antigos e lentos para tecnologias modernas, sem perder o histórico de dados da sua empresa.",
  },
];

const phases = [
  { number: "01", title: "Discovery & Requisitos", description: "Entendimento da dor e escopo" },
  { number: "02", title: "Arquitetura de Solução", description: "Definição de banco de dados e infra" },
  { number: "03", title: "Coding & Sprints", description: "Desenvolvimento iterativo" },
  { number: "04", title: "QA & Deploy", description: "Testes automatizados e entrega" },
];

const cases = [
  { type: "FINTECH", title: "Software de Gestão Financeira" },
  { type: "LOGÍSTICA", title: "Sistema de Rastreio em Tempo Real" },
  { type: "SAÚDE / HEALTHCARE", title: "Prontuário Eletrônico Seguro" },
];

const stats = [
  { value: "+50", label: "Projetos Entregues" },
  { value: "99.9%", label: "Uptime Garantido" },
  { value: "Clean", label: "Code Architecture" },
  { value: "24h", label: "Monitoramento" },
];

export default function DesenvolvimentoDeSoftware() {
  return (
    <Layout>
      <SEO
        title="Desenvolvimento de Software"
        description="Serviços de desenvolvimento de software sob medida. Transformamos regras de negócios complexas em aplicações digitais eficientes com engenharia de ponta a ponta."
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
              SOFTWARE SOB MEDIDA
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
              Serviços de <span className="text-primary">Desenvolvimento de Software</span> Sob Medida
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Transformamos regras de negócios complexas em aplicações digitais eficientes.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Engenharia de ponta a ponta para criar softwares que escalam junto com sua empresa.
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
                  Falar com Arquiteto
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="darkOutline" size="xl">
                <a href="#solucoes">Ver Stack Tecnológico ↓</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="marquee">
          {["DESENVOLVIMENTO DE SOFTWARE", "ENGENHARIA DE DADOS", "CLOUD COMPUTING", "API RESTFUL", "MICROSSERVIÇOS", "AGILE", "DESENVOLVIMENTO DE SOFTWARE", "ENGENHARIA DE DADOS", "CLOUD COMPUTING", "API RESTFUL"].map((item, index) => (
            <span key={index} className="text-primary-foreground font-bold text-sm whitespace-nowrap flex items-center gap-2">
              {item} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Engineering */}
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ciclo Completo de <span className="text-primary">Engenharia</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Não escrevemos apenas código; desenhamos soluções. Do levantamento de requisitos à manutenção contínua, cobrimos todas as etapas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div key={solution.title} className="service-card">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg">
              <a href="#orcamento">Ver Metodologia</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Agile Process */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Esteira de <span className="text-primary">Desenvolvimento Ágil</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Metodologia Scrum/Kanban para entregas constantes e previsíveis.
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
                  Ler Case Técnico ↗
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
              Parceria <span className="text-primary">Técnica</span>
            </h2>
            <blockquote className="text-lg md:text-xl text-foreground mb-6 italic">
              "O desenvolvimento do software transformou nossa operação manual em um processo 100% digital. A estabilidade da aplicação nos permitiu crescer 300% no último ano sem falhas técnicas."
            </blockquote>
            <p className="text-muted-foreground font-semibold">
              Diretor de TI — Indústria Farmacêutica
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
                Inicie Seu Projeto de <span className="text-primary">Software</span>
              </h2>
              <p className="text-muted-foreground">
                Preencha o formulário para uma análise técnica do seu escopo.
              </p>
            </div>

            <ContactForm 
              checkboxOptions={[
                { id: "novo", label: "Novo Software" },
                { id: "refatoracao", label: "Refatoração" },
                { id: "integracao", label: "Integração API" },
                { id: "mobile", label: "App Mobile" },
              ]}
              submitLabel="Solicitar Orçamento Técnico"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
