import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import heroBg from "@/assets/hero-bg.jpg";
import programmerImg from "@/assets/programmer-working.jpg";

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
  { num: "01", title: "Briefing", desc: "Você nos conta o que precisa e nós entendemos cada detalhe do seu projeto." },
  { num: "02", title: "Match", desc: "Selecionamos o programador ideal para a sua demanda, stack e prazo." },
  { num: "03", title: "Desenvolvimento", desc: "Seu programador dedicado constrói com entregas contínuas e total transparência." },
  { num: "04", title: "Entrega & Suporte", desc: "Projeto entregue com código limpo, documentação e suporte contínuo." },
];

const comparisons = [
  {
    title: "Nosso Programador",
    vs: "Freelancer Comum",
    desc: "Programador dedicado, com experiência comprovada, código limpo e comprometimento total com prazos e qualidade.",
    old: "Freelancer sem compromisso, código desorganizado, sem garantia de entrega nem suporte pós-projeto.",
  },
  {
    title: "Código Sob Medida",
    vs: "Templates Prontos",
    desc: "Seu programador desenvolve do zero, com arquitetura pensada para o seu negócio escalar.",
    old: "Plugins genéricos, código copiado da internet, sem personalização real e cheio de limitações.",
  },
  {
    title: "Suporte Contínuo",
    vs: "Abandono Pós-Entrega",
    desc: "Após a entrega, seu programador continua disponível para manutenção, melhorias e novas features.",
    old: "Programador desaparece depois do pagamento. Sem manutenção, sem resposta, sem evolução.",
  },
  {
    title: "Resultado Real",
    vs: "Promessas Vazias",
    desc: "Contrate programador com métricas de entrega, ROI comprovado e foco total no resultado do seu negócio.",
    old: "Sem métricas, sem acompanhamento, sem compromisso com o sucesso do projeto.",
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
      <section className="section-padding bg-background border-t border-dashed border-[#3f3f3f] relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-xl lg:max-w-2xl">
            <h2 className="text-h3 md:text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">
              Programadores Especializados.{" "}
              <span className="text-primary">Sob Demanda.</span>
            </h2>
            <p className="body-large text-foreground/50 max-w-xl">
              Contratar um programador não deveria ser um risco. Nossos profissionais dominam as tecnologias mais exigidas do mercado e entregam código limpo, escalável e pronto para produção.
            </p>
          </div>
        </div>
        {/* Programmer image on the right */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%]">
          <img
            src={programmerImg}
            alt="Programador desenvolvendo código"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
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

      {/* ===== STACKS ===== */}
      <section className="section-padding bg-background border-t border-dashed border-[#3f3f3f]">
        <div className="container-custom">
          <h2 className="text-h3 md:text-h2 lg:text-h1 font-light tracking-heading text-foreground leading-[0.95] mb-16">
            Programadores para Qualquer Stack.
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
            {[
              { name: "React", slug: "react", color: "#61DAFB" },
              { name: "Next.js", slug: "nextdotjs", color: "#ffffff" },
              { name: "TypeScript", slug: "typescript", color: "#3178C6" },
              { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
              { name: "Python", slug: "python", color: "#3776AB" },
              { name: "PHP", slug: "php", color: "#777BB4" },
              { name: "Laravel", slug: "laravel", color: "#FF2D20" },
              { name: "Vue.js", slug: "vuedotjs", color: "#4FC08D" },
              { name: "Angular", slug: "angular", color: "#0F0F11" },
              { name: "Flutter", slug: "flutter", color: "#02569B" },
              { name: "React Native", slug: "react", color: "#61DAFB" },
              { name: "AWS", slug: "amazonwebservices", color: "#FF9900" },
              { name: "Docker", slug: "docker", color: "#2496ED" },
              { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
              { name: "MongoDB", slug: "mongodb", color: "#47A248" },
              { name: "Firebase", slug: "firebase", color: "#DD2C00" },
              { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
              { name: "GraphQL", slug: "graphql", color: "#E10098" },
              { name: "Redis", slug: "redis", color: "#FF4438" },
              { name: "Shopify", slug: "shopify", color: "#7AB55C" },
              { name: "WordPress", slug: "wordpress", color: "#21759B" },
              { name: "Java", slug: "java", color: "#F89820" },
              { name: "C#", slug: "csharp", color: "#512BD4" },
              { name: ".NET", slug: "dotnet", color: "#512BD4" },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-3 group cursor-default">
                <div
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${tech.color}15, transparent 70%)`,
                    border: `1px solid ${tech.color}20`,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${tech.color}25, transparent 70%)`,
                      boxShadow: `0 0 30px ${tech.color}15`,
                    }}
                  />
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                    alt={tech.name}
                    loading="lazy"
                    className="w-7 h-7 md:w-8 md:h-8 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <span className="font-mono text-[0.5rem] md:text-[0.55rem] tracking-spaced uppercase text-foreground/30 group-hover:text-foreground/60 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
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
