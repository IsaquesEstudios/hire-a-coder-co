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
      <SEO title="Sobre Nós" description="Conheça a equipe por trás da Contratar Programador. Somos especialistas em desenvolvimento de sites, sistemas e software com mais de 5 anos de experiência no mercado." />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="mono-label">Sobre Nós</p>
            </div>
            <div className="lg:col-span-9">
              <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">
                Engenheiros de Software com <span className="text-primary">Paixão por Resultados</span>
              </h1>
              <p className="body-large text-foreground/60 max-w-2xl">
                Somos uma equipe de desenvolvedores especializados em criar soluções digitais que realmente fazem diferença. Nossa missão é transformar a tecnologia em vantagem competitiva para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-h4 font-light text-primary">{stat.value}</div>
                <div className="mono-label mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="mono-label">Nossa História</p>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <p className="body-large text-foreground/60">
                A Contratar Programador nasceu da frustração de ver empresas desperdiçarem potencial por falta de tecnologia adequada. Fundada por desenvolvedores com experiência em grandes empresas de tecnologia, nossa missão é democratizar o acesso a soluções digitais de qualidade.
              </p>
              <p className="body-large text-foreground/60">
                Ao longo dos anos, ajudamos mais de 150 empresas a transformarem suas operações através de sites, sistemas e automações. Cada projeto é tratado como único, com a mesma dedicação e excelência técnica.
              </p>
              <p className="body-large text-foreground/60">
                Acreditamos que tecnologia bem aplicada é o maior diferencial competitivo que uma empresa pode ter. Por isso, não entregamos apenas código – entregamos soluções que geram resultados mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 border-y border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <blockquote className="text-h4 font-light tracking-heading text-foreground text-center max-w-4xl mx-auto leading-[1.1]">
            "Nosso compromisso é transformar a complexidade técnica em simplicidade para o cliente, entregando soluções que realmente funcionam e geram <span className="text-primary">valor</span>."
          </blockquote>
          <p className="mono-label text-center mt-8">— Equipe Contratar Programador</p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="spaced-text text-muted-foreground mb-8">PRINCÍPIOS QUE GUIAM CADA LINHA DE CÓDIGO</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="border border-dashed border-[#3f3f3f] p-8 md:p-10">
                  <Icon className="w-6 h-6 text-primary mb-6" />
                  <h3 className="text-h6 font-light text-foreground mb-3">{value.title}</h3>
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
