import { ArrowRight, TrendingUp, MessageSquare, Eye, Shield, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

const solutions = [
  {
    icon: TrendingUp,
    title: "Análise Preditiva",
    description: "Antecipe a demanda de estoque e flutuações de mercado com algoritmos de Machine Learning. Pare de reagir, comece a prever.",
  },
  {
    icon: MessageSquare,
    title: "NLP & Chatbots Avançados",
    description: "IA que entende contexto, ironia e intenção. Atendimento ao cliente que parece humano, mas escala infinitamente.",
  },
  {
    icon: Eye,
    title: "Visão Computacional",
    description: "Automatize controle de qualidade e segurança analisando imagens e vídeos em tempo real.",
  },
];

const techStack = ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn", "AWS SageMaker"];

const phases = [
  { number: "1", title: "Data Audit", description: "Limpeza e estruturação da sua base de dados" },
  { number: "2", title: "Model Training", description: "Criação do algoritmo exclusivo para sua regra de negócio" },
  { number: "3", title: "Integration", description: "Conexão da IA com seu ERP, CRM ou Site atual" },
  { number: "4", title: "Continuous Learning", description: "O modelo fica mais inteligente a cada dia de uso" },
];

const cases = [
  { type: "VAREJO", title: "Recomendação de Produtos", result: "+35% de Ticket Médio com sugestões personalizadas por IA" },
  { type: "JURÍDICO", title: "Análise de Contratos", result: "Redução de 90% no tempo de revisão de documentos" },
  { type: "INDÚSTRIA", title: "Manutenção Preditiva", result: "Previsão de falha em maquinário com 48h de antecedência" },
];

export default function IAParaEmpresas() {
  return (
    <Layout>
      <SEO
        title="IA para Empresas"
        description="Soluções de inteligência artificial para empresas. Implementamos modelos de IA personalizados que prevêem tendências, automatizam o cognitivo e geram vantagem competitiva real."
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
              ENGINEERING THE FUTURE
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
              Soluções de <span className="text-primary">Inteligência Artificial</span> para Empresas
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Não apenas dados, mas respostas.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Implementamos modelos de IA personalizados que prevêem tendências, automatizam o cognitivo e geram vantagem competitiva real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#orcamento">
                  Descobrir Potencial da IA
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="darkOutline" size="xl">
                <a href="#solucoes">Ver Aplicações</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Awakening */}
      <section id="solucoes" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seus Dados Estão Dormindo. <span className="text-primary">Nós os Acordamos.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sua empresa gera terabytes de informação. Sem IA, isso é apenas custo de armazenamento. Com nossa tecnologia, vira lucro líquido.
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
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Powered by <span className="text-primary">State-of-the-Art Tech</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span key={tech} className="px-6 py-3 bg-muted rounded-full text-muted-foreground font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
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

      {/* Cases */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <div key={caseItem.title} className="service-card">
                <span className="text-primary text-xs font-bold tracking-wider">{caseItem.type}</span>
                <h3 className="text-xl font-bold mt-2 mb-4">
                  {caseItem.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  <strong>Resultado:</strong> {caseItem.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              IA Responsável e <span className="text-primary">Segura</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Seus dados são o seu maior ativo. Trabalhamos com protocolos rígidos de segurança, anonimização de dados e compliance com a LGPD.
            </p>
            <p className="text-secondary-foreground font-semibold">
              O modelo é seu, a inteligência fica na sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="orcamento" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Onde a IA Pode Impactar Seu <span className="text-primary">Negócio Hoje?</span>
              </h2>
              <p className="text-muted-foreground">
                Nem toda empresa precisa de IA, mas as que precisam e não usam, ficarão para trás. Vamos descobrir o seu cenário.
              </p>
            </div>

            <ContactForm submitLabel="Agendar Diagnóstico de IA" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
