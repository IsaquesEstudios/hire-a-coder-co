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
      <SEO title="Início" description="Desenvolvimento de sites, landing pages, e-commerce, sistemas e software sob medida. Soluções digitais de alta performance para escalar seu negócio." />

      {/* ===== HERO — Full viewport, centered, TitanGate exact layout ===== */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background -mt-20">
        {/* Background image with blend */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" aria-hidden="true" width={1920} height={1080} className="w-full h-full object-cover opacity-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        {/* Micro label */}
        <p className="spaced-text text-muted-foreground mb-6 relative z-10 animate-fade-in">
          ENGENHARIA DE SOFTWARE APLICADA
        </p>

        {/* Giant heading */}
        <h1 className="display-heading text-display text-center text-foreground relative z-10 animate-fade-in leading-[0.9]">
          Contratar<br />
          <span className="text-primary">Programador</span>
        </h1>

        {/* Nav pill — anchors like TitanGate */}
        <div className="relative z-10 mt-10 animate-fade-in">
          <div className="nav-pill flex items-center gap-0 px-2">
            {navAnchors.map((item, i) => (
              <span key={item.name} className="flex items-center">
                <a
                  href={item.href}
                  className="font-mono text-[0.65rem] tracking-spaced uppercase px-4 py-3 text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
                {i < navAnchors.length - 1 && (
                  <span className="text-foreground/20 text-xs">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO — "Invitation Only" style ===== */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[1.05] mb-8">
            <span className="font-medium">Sob Demanda.</span>{" "}
            <span className="text-foreground/40">
              Acesso exclusivo às melhores soluções digitais do mercado.
            </span>
          </h2>
        </div>
      </section>

      {/* ===== ELITE SECTION — Large statement + description ===== */}
      <section className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="max-w-5xl">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">
              Soluções Digitais de Alta Performance.{" "}
              <span className="text-primary">Sob Medida.</span>
            </h2>
            <p className="body-large text-foreground/50 max-w-3xl">
              Engenharia de software aplicada ao marketing e à operação. Onde outros usam templates, nós projetamos arquitetura. Onde outros entregam páginas, nós entregamos performance.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VISION — Tweet-style card ===== */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="mono-label mb-4">nossa visão</p>
              <p className="font-mono text-foreground text-sm">Contratar Programador</p>
              <p className="font-mono text-foreground/40 text-xs">@contratar_programador</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-h5 md:text-h4 font-light tracking-heading text-foreground/80 leading-[1.15]">
                Existem caminhos no mundo digital que não podem ser vistos — apenas sentidos. Onde outros investem no óbvio, nós exploramos o que está por trás das portas fechadas. Este é um portal para o extraordinário. Nem todos estão prontos para cruzá-lo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROTECTION — Two columns ===== */}
      <section className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-h4 md:text-h3 font-light tracking-heading text-foreground leading-[1] mb-6">
                Possibilidades Ilimitadas.
              </h3>
            </div>
            <div>
              <h3 className="text-h4 md:text-h3 font-light tracking-heading text-foreground leading-[1] mb-6">
                Proteção de Nível Corporativo.
              </h3>
              <p className="body-large text-foreground/50">
                O mercado digital foi feito para excluir. Opacidade, riscos e barreiras eram a norma.
              </p>
              <p className="body-large text-foreground/50 mt-6">
                Nós <span className="text-foreground">redefinimos</span>, <span className="text-foreground">reconstruímos</span> e <span className="text-foreground">reconfiguramos</span> os padrões que eram dados como certos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECIALTIES GRID — like TitanGate industries ===== */}
      <section id="servicos" className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-6">
              Dominamos as Tecnologias que Transformam Negócios
            </h2>
            <p className="body-large text-foreground/40">
              Especializados em engenharia que molda o futuro
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

      {/* ===== MARQUEE — Logo-style running text ===== */}
      <section className="border-y border-dashed border-[#3f3f3f] py-6 overflow-hidden bg-background">
        <div className="marquee">
          {marqueeItems.map((item, i) => (
            <span key={i} className="font-mono text-[0.6rem] tracking-[0.4rem] uppercase text-foreground/20 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ===== STATS — "Access That Speaks for Itself" ===== */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95]">
              Resultados que Falam por Si
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-display font-light text-primary leading-none">98%</div>
              <p className="mono-label mt-4">dos projetos entregues geraram retorno positivo nos primeiros 6 meses</p>
            </div>
            <div className="text-center">
              <div className="text-display font-light text-primary leading-none">+150</div>
              <p className="mono-label mt-4">projetos entregues com sucesso nos últimos 5 anos</p>
            </div>
            <div className="text-center">
              <div className="text-display font-light text-primary leading-none">3x</div>
              <p className="mono-label mt-4">média de crescimento dos nossos clientes após 12 meses</p>
            </div>
            <div className="text-center">
              <div className="text-display font-light text-primary leading-none">24/7</div>
              <p className="mono-label mt-4">suporte técnico contínuo para todos os projetos ativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LARGE TEXT BREAK ===== */}
      <section className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom max-w-5xl">
          <p className="text-h4 md:text-h3 font-light tracking-heading text-foreground leading-[1.1]">
            <span className="font-medium">O que está fora do alcance, nós tornamos possível.</span>{" "}
            <span className="text-foreground/40">
              Além do desenvolvimento, criamos acesso — posicionando sua empresa nas melhores tecnologias com proteção e performance incomparáveis.
            </span>
          </p>
        </div>
      </section>

      {/* ===== PROCESS — "From Selection to Legacy" ===== */}
      <section id="processo" className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95]">
              Da Ideia ao Resultado.
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

      {/* ===== COMPARISONS — "X vs Y" TitanGate slider style ===== */}
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
                    <p className="mono-label mb-2">O Mundo Antigo</p>
                    <p className="text-sm font-light text-foreground/30 leading-relaxed">{comp.old}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MANIFESTO — White bg, giant letters, like TitanGate "TGE" section ===== */}
      <section id="manifesto" className="bg-foreground text-background">
        {/* Giant letters */}
        <div className="overflow-hidden py-10 md:py-16">
          <div className="text-[20vw] md:text-[25vw] font-black leading-[0.85] tracking-[-0.04em] text-background/[0.08] select-none text-center">
            CP
          </div>
        </div>

        {/* Split text */}
        <div className="container-custom pb-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h2 md:text-h1 font-light tracking-heading leading-[0.95]">
                Excelência.
              </h2>
            </div>
            <div>
              <h2 className="text-h2 md:text-h1 font-light tracking-heading leading-[0.95] text-background/30">
                Sem Limites.
              </h2>
              <p className="body-large text-background/60 mt-8">
                Nosso compromisso nunca será aberto para qualquer um, e nunca foi feito para ser. Quem está dentro vive os resultados.
              </p>
              <p className="body-large text-background mt-4">
                Quem está fora só verá as sombras.
              </p>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <span className="font-mono text-background text-xs tracking-spaced uppercase">
              CONTRATAR<span className="text-primary">PROGRAMADOR</span>
            </span>
            <Link
              to="/contato"
              className="nav-pill font-mono text-background text-[0.7rem] tracking-spaced uppercase px-6 py-3 hover:text-primary transition-colors border border-background/20"
            >
              Orçar Projeto <ArrowRight className="inline w-3 h-3 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
