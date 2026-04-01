import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const navAnchors = [
  { name: "Serviços", href: "#servicos" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Processo", href: "#processo" },
  { name: "Manifesto", href: "#manifesto" },
];

const specialties = [
  "Criação de Site",
  "Landing Page",
  "E-commerce",
  "Sistemas Web",
  "Software Sob Medida",
  "Automação",
  "Inteligência Artificial",
  "Integração API",
];

const marqueeItems = [
  "SITES", "LANDING PAGES", "E-COMMERCE", "SISTEMAS", "SOFTWARE",
  "AUTOMAÇÃO", "INTELIGÊNCIA ARTIFICIAL", "APIs", "SAAS", "APPS",
  "SITES", "LANDING PAGES", "E-COMMERCE", "SISTEMAS", "SOFTWARE",
  "AUTOMAÇÃO", "INTELIGÊNCIA ARTIFICIAL", "APIs", "SAAS", "APPS",
  "SITES", "LANDING PAGES", "E-COMMERCE", "SISTEMAS", "SOFTWARE",
  "AUTOMAÇÃO", "INTELIGÊNCIA ARTIFICIAL", "APIs", "SAAS", "APPS",
];

const steps = [
  { num: "01", title: "Descoberta", desc: "Entendemos o seu negócio, mapeamos necessidades e definimos escopo." },
  { num: "02", title: "Arquitetura", desc: "Projetamos a solução técnica ideal com foco em performance e escala." },
  { num: "03", title: "Desenvolvimento", desc: "Construímos com metodologia ágil, entregas contínuas e transparência." },
  { num: "04", title: "Evolução", desc: "Suporte contínuo, otimizações e novas funcionalidades sob demanda." },
];

const comparisons = [
  {
    title: "Performance",
    vs: "Sites Lentos",
    desc: "Arquitetura otimizada, CDN global, carregamento instantâneo. Cada milissegundo conta.",
    old: "Templates pesados, servidores compartilhados, tempo de carregamento acima de 5 segundos.",
  },
  {
    title: "Engenharia",
    vs: "Templates Prontos",
    desc: "Código sob medida, escalável e mantido por engenheiros especializados.",
    old: "Plugins genéricos, código duplicado, sem possibilidade de personalização real.",
  },
  {
    title: "Suporte",
    vs: "Abandono",
    desc: "Atendimento direto, suporte contínuo, evolução constante do seu produto.",
    old: "Freelancer desaparece após entrega, sem garantia, sem manutenção.",
  },
  {
    title: "Resultado",
    vs: "Promessas Vazias",
    desc: "Métricas reais, ROI mensurável, estratégia alinhada aos seus objetivos de negócio.",
    old: "Sem métricas, sem acompanhamento, sem compromisso com resultados.",
  },
];

export default function Index() {
  return (
    <Layout>
      <SEO title="Contratar Programador" description="Contrate programadores especializados para criar sites, sistemas, e-commerce e software sob medida. Profissionais de elite para o seu projeto digital." />

      {/* ===== HERO ===== */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background -mt-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" aria-hidden="true" width={1920} height={1080} className="w-full h-full object-cover opacity-[0.35]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        <p className="spaced-text text-muted-foreground mb-6 relative z-10 animate-fade-in">
          CONTRATE O PROGRAMADOR CERTO
        </p>

        <h1 className="display-heading text-display text-center text-foreground relative z-10 animate-fade-in leading-[0.9]">
          Contratar<br />
          <span className="text-primary">Programador</span>
        </h1>

        <p className="relative z-10 mt-8 text-center text-foreground/50 max-w-2xl px-6 text-base md:text-lg font-light leading-relaxed animate-fade-in">
          Encontre o programador ideal para o seu projeto. Sites, sistemas, apps e software sob medida — desenvolvidos por profissionais experientes, prontos para entregar.
        </p>
        <div className="relative z-10 mt-8 animate-fade-in">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary text-background font-medium text-sm tracking-wide uppercase px-8 py-4 hover:bg-primary/90 transition-colors"
          >
            Contratar Agora <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[1.05] mb-8">
            <span className="font-medium">Seu projeto merece um programador de verdade.</span>{" "}
            <span className="text-foreground/40">
              Não um freelancer genérico. Um profissional dedicado, com experiência real em projetos que geram resultado.
            </span>
          </h2>
        </div>
      </section>

      {/* ===== ELITE SECTION ===== */}
      <section className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="max-w-5xl">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">
              Programadores Especializados.{" "}
              <span className="text-primary">Sob Demanda.</span>
            </h2>
            <p className="body-large text-foreground/50 max-w-3xl">
              Contratar um programador não deveria ser um risco. Nossos profissionais dominam as tecnologias mais exigidas do mercado e entregam código limpo, escalável e pronto para produção.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="mono-label mb-4">por que nos contratar</p>
              <p className="font-mono text-foreground text-sm">Contratar Programador</p>
              <p className="font-mono text-foreground/40 text-xs">@contratar_programador</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-h5 md:text-h4 font-light tracking-heading text-foreground/80 leading-[1.15]">
                Contratar um programador qualificado é a diferença entre um projeto que funciona e um que transforma. Enquanto o mercado oferece promessas, nós entregamos código — testado, documentado e pronto para escalar o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TWO COLUMNS ===== */}
      <section className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-h4 md:text-h3 font-light tracking-heading text-foreground leading-[1] mb-6">
                Programadores para Qualquer Stack.
              </h3>
            </div>
            <div>
              <h3 className="text-h4 md:text-h3 font-light tracking-heading text-foreground leading-[1] mb-6">
                Comprometimento Total com o Seu Projeto.
              </h3>
              <p className="body-large text-foreground/50">
                Contratar programador freelancer é arriscado. Prazos furados, código abandonado e zero suporte são a norma do mercado.
              </p>
              <p className="body-large text-foreground/50 mt-6">
                Aqui você contrata <span className="text-foreground">responsabilidade</span>, <span className="text-foreground">qualidade</span> e <span className="text-foreground">continuidade</span> — do primeiro commit até a entrega final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECIALTIES GRID ===== */}
      <section id="servicos" className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-6">
              Contrate Programadores Para
            </h2>
            <p className="body-large text-foreground/40">
              Todas as tecnologias e formatos que o seu projeto precisa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {specialties.map((item) => (
              <div
                key={item}
                className="border border-dashed border-[#3f3f3f] p-8 md:p-12 flex items-center justify-center text-center group hover:bg-foreground/[0.02] transition-colors"
              >
                <span className="font-mono text-[0.7rem] tracking-spaced uppercase text-foreground/60 group-hover:text-primary transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="border-y border-dashed border-[#3f3f3f] py-6 overflow-hidden bg-background">
        <div className="marquee">
          {marqueeItems.map((item, i) => (
            <span key={i} className="font-mono text-[0.6rem] tracking-[0.4rem] uppercase text-foreground/20 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95]">
              Por Que Nos Escolher Para Contratar Programador
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-display font-light text-primary leading-none">98%</div>
              <p className="mono-label mt-4">dos clientes que contrataram programador conosco tiveram retorno em 6 meses</p>
            </div>
            <div className="text-center">
              <div className="text-display font-light text-primary leading-none">+150</div>
              <p className="mono-label mt-4">projetos entregues por programadores da nossa equipe</p>
            </div>
            <div className="text-center">
              <div className="text-display font-light text-primary leading-none">3x</div>
              <p className="mono-label mt-4">mais rápido que contratar programador por conta própria</p>
            </div>
            <div className="text-center">
              <div className="text-display font-light text-primary leading-none">24/7</div>
              <p className="mono-label mt-4">suporte técnico do programador dedicado ao seu projeto</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LARGE TEXT BREAK ===== */}
      <section className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom max-w-5xl">
          <p className="text-h4 md:text-h3 font-light tracking-heading text-foreground leading-[1.1]">
            <span className="font-medium">Contratar o programador certo muda tudo.</span>{" "}
            <span className="text-foreground/40">
              Chega de projetos parados, código mal feito e promessas vazias. Contrate programadores que entregam resultado de verdade.
            </span>
          </p>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="processo" className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95]">
              Como Contratar Seu Programador
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="border border-dashed border-[#3f3f3f] p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-mono text-primary text-[0.7rem] tracking-spaced">{step.num}</span>
                  {i < steps.length - 1 && (
                    <span className="font-mono text-foreground/20 text-[0.6rem]">/ 04</span>
                  )}
                </div>
                <h3 className="text-h6 font-light text-foreground mb-4">{step.title}</h3>
                <p className="text-sm font-light text-foreground/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISONS ===== */}
      <section id="diferenciais" className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          {comparisons.map((comp, i) => (
            <div key={i} className="border-b border-dashed border-[#3f3f3f] py-16 md:py-20 last:border-b-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-4">
                    {comp.title}{" "}
                    <span className="text-foreground/20">vs</span>{" "}
                    <span className="text-foreground/30">{comp.vs}</span>
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="body-large text-foreground/70">{comp.desc}</p>
                  <div>
                    <p className="mono-label mb-2">Programador Comum</p>
                    <p className="text-sm font-light text-foreground/30 leading-relaxed">{comp.old}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MANIFESTO ===== */}
      <section id="manifesto" className="bg-foreground text-background">
        <div className="overflow-hidden py-10 md:py-16">
          <div className="text-[20vw] md:text-[25vw] font-black leading-[0.85] tracking-[-0.04em] text-background/[0.08] select-none text-center">
            CP
          </div>
        </div>

        <div className="container-custom pb-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h2 md:text-h1 font-light tracking-heading leading-[0.95]">
                Contrate Certo.
              </h2>
            </div>
            <div>
              <h2 className="text-h2 md:text-h1 font-light tracking-heading leading-[0.95] text-background/30">
                Contrate Uma Vez.
              </h2>
              <p className="body-large text-background/60 mt-8">
                Quem contrata programador conosco não volta ao mercado procurando outro. Nosso compromisso é com o resultado — e ele fala por si.
              </p>
              <p className="body-large text-background mt-4">
                Pare de buscar. Contrate o programador certo.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <span className="font-mono text-background text-xs tracking-spaced uppercase">
              CONTRATAR<span className="text-primary">PROGRAMADOR</span>
            </span>
            <Link
              to="/contato"
              className="nav-pill font-mono text-background text-[0.7rem] tracking-spaced uppercase px-6 py-3 hover:text-primary transition-colors border border-background/20"
            >
              Contratar Programador <ArrowRight className="inline w-3 h-3 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
