import { ArrowRight, Database, Cloud, BarChart3, Link2, Shield, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const benefits = [
  {
    icon: Database,
    title: "Centralização de Dados",
    description: "Unifique informações de vendas, estoque e financeiro em um único lugar. Elimine o caos de múltiplas planilhas desconexas.",
  },
  {
    icon: BarChart3,
    title: "Automação Operacional",
    description: "Reduza custos operacionais automatizando tarefas repetitivas. Deixe que o sistema execute as rotinas burocráticas por você.",
  },
  {
    icon: Cloud,
    title: "Acesso Nuvem (SaaS)",
    description: "Seu escritório em qualquer lugar. Acesse relatórios gerenciais e controle a operação via celular, tablet ou desktop com segurança total.",
  },
  {
    icon: BarChart3,
    title: "Dashboards e BI",
    description: "Transformamos dados brutos em inteligência. Tenha painéis visuais que mostram o lucro, gargalos e métricas em tempo real.",
  },
  {
    icon: Link2,
    title: "Integrações via API",
    description: "Seu sistema conectado a tudo. Integramos sua plataforma com Gateways de Pagamento, WhatsApp, CRMs e Emissores de Notas.",
  },
  {
    icon: Shield,
    title: "Controle de Permissões (ACL)",
    description: "Defina hierarquias de acesso. Garanta que cada funcionário veja apenas o que é pertinente à função dele.",
  },
];

const techStack = [
  { label: "Front-end", value: "React / Vue / Angular" },
  { label: "Back-end", value: "Node.js / Python / Go" },
  { label: "Database", value: "PostgreSQL / MongoDB" },
  { label: "Infra", value: "AWS / Google Cloud" },
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
      <SEO
        title="Desenvolvimento de Sistema"
        description="Desenvolvimento de sistemas web e softwares sob medida. Substitua planilhas manuais por uma plataforma própria, segura, escalável e integrada à realidade do seu negócio."
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
              SISTEMAS WEB
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
              Desenvolvimento de <span className="text-primary">Sistemas Web</span> e Softwares Sob Medida
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Substitua planilhas manuais por uma plataforma própria. Criamos sistemas seguros, escaláveis e totalmente integrados à realidade do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#orcamento">
                  Falar com Engenheiro
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="darkOutline" size="xl">
                <a href="#beneficios">Ver Funcionalidades</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="marquee">
          {["DESENVOLVIMENTO DE SISTEMAS", "AUTOMAÇÃO DE PROCESSOS", "INTEGRAÇÃO API", "GESTÃO DE DADOS", "DASHBOARDS EM TEMPO REAL", "DESENVOLVIMENTO DE SISTEMAS", "AUTOMAÇÃO DE PROCESSOS", "INTEGRAÇÃO API", "GESTÃO DE DADOS", "DASHBOARDS EM TEMPO REAL"].map((item, index) => (
            <span key={index} className="text-primary-foreground font-bold text-sm whitespace-nowrap flex items-center gap-2">
              {item} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que Investir no <span className="text-primary">Desenvolvimento de Sistemas?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="service-card">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Arquitetura de <span className="text-primary">Software Moderna</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Utilizamos as tecnologias mais robustas do mercado para garantir que seu sistema não fique obsoleto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.label} className="bg-muted rounded-lg p-6 text-center">
                <span className="text-primary font-bold text-sm">{tech.label}</span>
                <p className="text-secondary-foreground font-semibold mt-2">{tech.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Etapas do <span className="text-primary">Desenvolvimento</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.number} className="service-card relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{phase.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
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
                Sua Empresa Precisa de um <span className="text-primary">Software Exclusivo?</span>
              </h2>
              <p className="text-muted-foreground">
                Preencha o formulário para agendarmos uma reunião de levantamento de requisitos.
              </p>
            </div>

            <ContactForm submitLabel="Cotar Sistema Personalizado" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
