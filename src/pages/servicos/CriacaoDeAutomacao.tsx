import { ArrowRight, MessageSquare, Link2, Mail, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const features = [
  { title: "Redução de Custos Operacionais" },
  { title: "Integração entre Softwares (APIs)" },
  { title: "Funcionamento 24/7 sem erros" },
];

const solutions = [
  {
    icon: MessageSquare,
    title: "Atendimento Automático (Chatbots)",
    description: "Robôs de WhatsApp e Instagram que respondem clientes, agendam reuniões e tiram dúvidas 24h por dia, sem intervenção humana.",
  },
  {
    icon: Link2,
    title: "Conexão entre Sistemas (API)",
    description: "Seu CRM não conversa com seu Financeiro? Nós criamos a ponte. Dados inseridos em um lugar aparecem automaticamente no outro.",
  },
  {
    icon: Mail,
    title: "Automação de Marketing",
    description: "Distribuição automática de leads para vendedores, disparo de e-mails pós-venda e atualização de planilhas de controle.",
  },
];

const phases = [
  { number: "01", title: "Mapeamento de Rotina", description: "Identificação de gargalos manuais" },
  { number: "02", title: "Desenho do Fluxo", description: "Lógica de 'Gatilho e Ação'" },
  { number: "03", title: "Desenvolvimento e Integração", description: "Configuração de APIs e Webhooks" },
  { number: "04", title: "Homologação e Play", description: "Testes de erro e início da operação" },
];

const cases = [
  { type: "ATENDIMENTO / WHATSAPP", title: "Chatbot para Agendamento de Clínicas" },
  { type: "FINANCEIRO", title: "Emissão Automática de Notas Fiscais" },
  { type: "COMERCIAL", title: "Distribuição de Leads do Facebook" },
];

const stats = [
  { value: "+100k", label: "Tarefas Executadas" },
  { value: "0", label: "Erros Manuais" },
  { value: "24/7", label: "Operação" },
  { value: "+50", label: "APIs Integradas" },
];

export default function CriacaoDeAutomacao() {
  return (
    <Layout>
      <SEO
        title="Criação de Automação"
        description="Criação de automação para escalar sua operação. Desenvolvemos automações inteligentes que conectam seus sistemas e eliminam tarefas repetitivas."
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
              AUTOMAÇÃO
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
              Criação de <span className="text-primary">Automação</span> para Escalar Sua Operação
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Deixe os robôs trabalharem enquanto você foca na estratégia.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Desenvolvemos automações inteligentes que conectam seus sistemas e eliminam tarefas repetitivas.
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
                  Automatizar Meu Negócio
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="darkOutline" size="xl">
                <a href="#solucoes">Ver Exemplos ↓</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="marquee">
          {["CRIAÇÃO DE AUTOMAÇÃO", "CHATBOTS INTELIGENTES", "INTEGRAÇÃO API", "N8N & WEBHOOKS", "GESTÃO DE LEADS", "DISPARO AUTOMÁTICO", "CRIAÇÃO DE AUTOMAÇÃO", "CHATBOTS INTELIGENTES", "INTEGRAÇÃO API", "N8N & WEBHOOKS"].map((item, index) => (
            <span key={index} className="text-primary-foreground font-bold text-sm whitespace-nowrap flex items-center gap-2">
              {item} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Freedom */}
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Liberdade <span className="text-primary">Operacional</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Se uma tarefa no seu computador é repetitiva, ela pode ser automatizada. Conectamos o desconectado e criamos fluxos que funcionam sozinhos.
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
              <a href="#orcamento">Ver Possibilidades</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Do Manual ao <span className="text-primary">Automático</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Método lógico para substituir trabalho braçal por código eficiente.
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
                  Ver Fluxo ↗
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
              Ganho de <span className="text-primary">Eficiência</span>
            </h2>
            <blockquote className="text-lg md:text-xl text-foreground mb-6 italic">
              "Economizamos cerca de 40 horas semanais da equipe administrativa com a criação da automação de contratos. O investimento se pagou no primeiro mês."
            </blockquote>
            <p className="text-muted-foreground font-semibold">
              CEO — Imobiliária Digital
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
                Pare de Perder <span className="text-primary">Tempo Hoje</span>
              </h2>
              <p className="text-muted-foreground">
                Conte qual processo manual mais consome tempo na sua empresa e vamos automatizá-lo.
              </p>
            </div>

            <ContactForm 
              checkboxOptions={[
                { id: "whatsapp", label: "WhatsApp" },
                { id: "planilhas", label: "Planilhas" },
                { id: "email", label: "E-mail" },
                { id: "crm", label: "CRM" },
              ]}
              submitLabel="Quero Automatizar"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
