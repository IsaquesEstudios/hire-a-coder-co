import { Code, Users, Target, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";

const values = [
  { icon: Code, title: "Excelência Técnica", description: "Código limpo, arquitetura escalável e as melhores práticas de desenvolvimento." },
  { icon: Users, title: "Parceria Genuína", description: "Trabalhamos lado a lado com nossos clientes para entender e resolver seus desafios." },
  { icon: Target, title: "Foco em Resultados", description: "Cada linha de código é escrita pensando no impacto positivo para o seu negócio." },
  { icon: Award, title: "Compromisso Total", description: "Suporte contínuo e dedicação até que seu projeto atinja todo seu potencial." },
];

const stats = [
  { value: "+150", label: "Projetos Entregues" },
  { value: "+5", label: "Anos de Experiência" },
  { value: "90%", label: "Clientes Satisfeitos" },
  { value: "24/7", label: "Suporte Disponível" },
];

export default function Sobre() {
  return (
    <Layout>
      <SEO
        title="Sobre Nós"
        description="Conheça a equipe por trás da Contratar Programador. Somos especialistas em desenvolvimento de sites, sistemas e software com mais de 5 anos de experiência no mercado."
      />

      {/* Hero */}
      <section className="section-padding bg-background pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 border border-border text-muted-foreground rounded-full text-xs font-medium tracking-widest mb-6">
              SOBRE NÓS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
              Engenheiros de Software com <span className="text-primary">Paixão por Resultados</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Somos uma equipe de desenvolvedores especializados em criar soluções digitais que realmente fazem diferença. Nossa missão é transformar a tecnologia em vantagem competitiva para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-xs tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                Nossa <span className="text-primary">História</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  A Contratar Programador nasceu da frustração de ver empresas desperdiçarem potencial por falta de tecnologia adequada. Fundada por desenvolvedores com experiência em grandes empresas de tecnologia, nossa missão é democratizar o acesso a soluções digitais de qualidade.
                </p>
                <p>
                  Ao longo dos anos, ajudamos mais de 150 empresas a transformarem suas operações através de sites, sistemas e automações. Cada projeto é tratado como único, com a mesma dedicação e excelência técnica.
                </p>
                <p>
                  Acreditamos que tecnologia bem aplicada é o maior diferencial competitivo que uma empresa pode ter. Por isso, não entregamos apenas código – entregamos soluções que geram resultados mensuráveis.
                </p>
              </div>
            </div>
            <div className="border border-border rounded-2xl p-8 md:p-12 bg-card">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 italic">
                "Nosso compromisso é transformar a complexidade técnica em simplicidade para o cliente, entregando soluções que realmente funcionam e geram valor."
              </blockquote>
              <p className="text-muted-foreground font-semibold">
                — Equipe Contratar Programador
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
              Nossos <span className="text-primary">Valores</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light">
              Os princípios que guiam cada linha de código que escrevemos e cada relacionamento que construímos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="border border-border rounded-lg p-6 text-center bg-background">
                  <div className="w-14 h-14 border border-border rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
