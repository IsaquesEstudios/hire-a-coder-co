import { Link } from "react-router-dom";
import { ArrowRight, Code2, Globe, FileText, ShoppingCart, Monitor, Cpu, Bot, Plug } from "lucide-react";
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
  { name: "Criação de Site", desc: "Sites institucionais rápidos, responsivos e otimizados para conversão.", icon: "Globe", accent: "45 100% 49%", span: "" },
  { name: "Landing Page", desc: "Páginas de alta conversão focadas em capturar leads e vender.", icon: "FileText", accent: "200 80% 55%", span: "md:col-span-2" },
  { name: "E-commerce", desc: "Lojas virtuais completas com checkout, pagamento e gestão.", icon: "ShoppingCart", accent: "280 70% 55%", span: "" },
  { name: "Sistemas Web", desc: "Plataformas sob medida para automatizar processos do seu negócio.", icon: "Monitor", accent: "160 60% 45%", span: "" },
  { name: "Software Sob Medida", desc: "Soluções únicas desenvolvidas para resolver o seu problema específico.", icon: "Cpu", accent: "340 75% 55%", span: "" },
  { name: "Automação", desc: "Automatize tarefas repetitivas e ganhe escala sem aumentar equipe.", icon: "Bot", accent: "25 90% 55%", span: "" },
  { name: "Inteligência Artificial", desc: "IA aplicada ao seu negócio: chatbots, análise de dados e mais.", icon: "Code2", accent: "260 80% 60%", span: "md:col-span-2" },
  { name: "Integração API", desc: "Conecte sistemas, plataformas e serviços de forma segura e eficiente.", icon: "Plug", accent: "190 70% 50%", span: "" },
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
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, hsl(220 40% 8%), hsl(0 0% 0%))',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 50%, hsl(220 60% 12% / 0.5), transparent 50%), radial-gradient(circle at 70% 50%, hsl(250 40% 10% / 0.4), transparent 50%)',
        }} />

        <div className="container-custom relative z-10">
          <h2 className="text-h3 md:text-h2 lg:text-h1 font-light tracking-heading text-foreground leading-[0.95] mb-6 text-center">
            Programadores para Qualquer Stack.
          </h2>
          <p className="text-center text-foreground/40 font-light text-base md:text-lg mb-20 max-w-2xl mx-auto">
            Dominamos as tecnologias que movem o mercado digital
          </p>

          {/* Desktop: positioned cards with SVG lines */}
          <div className="hidden lg:block relative mx-auto" style={{ width: '1000px', height: '520px' }}>
            {/* Central hub - solid filled circle like reference */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              {/* Outer soft glow */}
              <div className="absolute w-48 h-48 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(45 100% 49% / 0.05), transparent 70%)',
                }}
              />
              {/* Outer ring */}
              <div className="absolute w-40 h-40 rounded-full"
                style={{
                  border: '1px solid hsl(45 100% 49% / 0.06)',
                }}
              />
              {/* Main filled circle */}
              <div className="w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, hsl(45 80% 35%), hsl(45 100% 25%), hsl(35 90% 20%))',
                  boxShadow: '0 0 80px hsl(45 100% 49% / 0.2), 0 8px 32px hsl(0 0% 0% / 0.4), inset 0 2px 4px hsl(45 100% 60% / 0.2)',
                }}
              >
                {/* Inner highlight */}
                <div className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 40% 35%, hsl(45 100% 60% / 0.15), transparent 60%)',
                  }}
                />
                <Code2 className="w-10 h-10 text-foreground relative z-10" strokeWidth={1.5} />
              </div>
            </div>

            {/* SVG connecting lines */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1000 520">
              <defs>
                <linearGradient id="lineL1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#61DAFB" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FABF00" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="lineL2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5FA04E" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FABF00" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="lineL3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3776AB" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FABF00" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="lineL4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3178C6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FABF00" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="lineR1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FABF00" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#4169E1" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineR2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FABF00" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#2496ED" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineR3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FABF00" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FF2D20" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Left lines - smooth cubic bezier curves from cards to center */}
              <path d="M 270 75 C 370 75, 440 150, 465 250" fill="none" stroke="url(#lineL1)" strokeWidth="1" opacity="0.7" />
              <path d="M 250 195 C 340 195, 420 220, 460 255" fill="none" stroke="url(#lineL2)" strokeWidth="1" opacity="0.7" />
              <path d="M 295 340 C 370 340, 430 310, 462 275" fill="none" stroke="url(#lineL3)" strokeWidth="1" opacity="0.7" />
              <path d="M 260 455 C 360 450, 430 380, 465 275" fill="none" stroke="url(#lineL4)" strokeWidth="1" opacity="0.7" />
              {/* Right lines - smooth cubic bezier curves from center to cards */}
              <path d="M 535 250 C 560 150, 630 105, 710 105" fill="none" stroke="url(#lineR1)" strokeWidth="1" opacity="0.7" />
              <path d="M 540 260 C 580 260, 650 260, 720 260" fill="none" stroke="url(#lineR2)" strokeWidth="1" opacity="0.7" />
              <path d="M 535 275 C 560 370, 630 415, 700 415" fill="none" stroke="url(#lineR3)" strokeWidth="1" opacity="0.7" />
            </svg>

            {/* LEFT CARDS - staggered positions */}
            {[
              { name: "React", slug: "react", color: "#61DAFB", desc: "Interfaces modernas e reativas", top: 30, left: 20 },
              { name: "Node.js", slug: "nodedotjs", color: "#5FA04E", desc: "Back-end escalável e performático", top: 155, left: 0 },
              { name: "Python", slug: "python", color: "#3776AB", desc: "IA, automação e data science", top: 290, left: 40 },
              { name: "TypeScript", slug: "typescript", color: "#3178C6", desc: "Código robusto e tipado", top: 410, left: 10 },
            ].map((tech) => (
              <div key={tech.name} className="absolute z-30 group cursor-default" style={{ top: tech.top, left: tech.left }}>
                <div className="relative flex items-start gap-4 px-6 py-5 rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-x-1 w-[250px]"
                  style={{
                    background: `linear-gradient(145deg, ${tech.color}10, hsl(220 30% 6% / 0.9), ${tech.color}05)`,
                    border: `1px solid ${tech.color}20`,
                    boxShadow: `0 8px 40px ${tech.color}06, inset 0 1px 0 ${tech.color}12`,
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 20% 30%, ${tech.color}15, transparent 70%)`,
                      boxShadow: `0 0 50px ${tech.color}10`,
                    }}
                  />
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}18, ${tech.color}08)`,
                      border: `1px solid ${tech.color}25`,
                    }}
                  >
                    <img src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} alt={tech.name} loading="lazy" className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {/* Text */}
                  <div className="relative z-10">
                    <span className="font-mono text-[0.7rem] tracking-spaced uppercase text-foreground/70 group-hover:text-foreground/90 transition-colors block">
                      {tech.name}
                    </span>
                    <span className="text-[0.7rem] text-foreground/30 group-hover:text-foreground/50 transition-colors font-light mt-1 block leading-snug">
                      {tech.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* RIGHT CARDS - staggered positions */}
            {[
              { name: "PostgreSQL", slug: "postgresql", color: "#4169E1", desc: "Banco relacional poderoso", top: 55, right: 10 },
              { name: "Docker", slug: "docker", color: "#2496ED", desc: "Deploy e infraestrutura ágil", top: 210, right: 0 },
              { name: "Laravel", slug: "laravel", color: "#FF2D20", desc: "APIs robustas e elegantes", top: 365, right: 30 },
            ].map((tech) => (
              <div key={tech.name} className="absolute z-30 group cursor-default" style={{ top: tech.top, right: tech.right }}>
                <div className="relative flex items-start gap-4 px-6 py-5 rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:translate-x-1 w-[250px]"
                  style={{
                    background: `linear-gradient(145deg, ${tech.color}10, hsl(220 30% 6% / 0.9), ${tech.color}05)`,
                    border: `1px solid ${tech.color}20`,
                    boxShadow: `0 8px 40px ${tech.color}06, inset 0 1px 0 ${tech.color}12`,
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 20% 30%, ${tech.color}15, transparent 70%)`,
                      boxShadow: `0 0 50px ${tech.color}10`,
                    }}
                  />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}18, ${tech.color}08)`,
                      border: `1px solid ${tech.color}25`,
                    }}
                  >
                    <img src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} alt={tech.name} loading="lazy" className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="relative z-10">
                    <span className="font-mono text-[0.7rem] tracking-spaced uppercase text-foreground/70 group-hover:text-foreground/90 transition-colors block">
                      {tech.name}
                    </span>
                    <span className="text-[0.7rem] text-foreground/30 group-hover:text-foreground/50 transition-colors font-light mt-1 block leading-snug">
                      {tech.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* Mobile hub */}
            <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{
                background: 'radial-gradient(circle, hsl(45 100% 49% / 0.12), hsl(45 100% 49% / 0.03))',
                border: '2px solid hsl(45 100% 49% / 0.4)',
                boxShadow: '0 0 60px hsl(45 100% 49% / 0.1)',
              }}
            >
              <span className="font-mono text-primary text-xs tracking-spaced uppercase font-bold">CP</span>
            </div>
            {[
              { name: "React", slug: "react", color: "#61DAFB", desc: "Interfaces modernas e reativas" },
              { name: "Node.js", slug: "nodedotjs", color: "#5FA04E", desc: "Back-end escalável e performático" },
              { name: "Python", slug: "python", color: "#3776AB", desc: "IA, automação e data science" },
              { name: "TypeScript", slug: "typescript", color: "#3178C6", desc: "Código robusto e tipado" },
              { name: "PostgreSQL", slug: "postgresql", color: "#4169E1", desc: "Banco relacional poderoso" },
              { name: "Docker", slug: "docker", color: "#2496ED", desc: "Deploy e infraestrutura ágil" },
              { name: "Laravel", slug: "laravel", color: "#FF2D20", desc: "APIs robustas e elegantes" },
            ].map((tech) => (
              <div key={tech.name} className="relative flex items-start gap-4 px-5 py-4 rounded-2xl group"
                style={{
                  background: `linear-gradient(145deg, ${tech.color}10, hsl(220 30% 6% / 0.9), ${tech.color}05)`,
                  border: `1px solid ${tech.color}20`,
                  boxShadow: `0 4px 30px ${tech.color}06, inset 0 1px 0 ${tech.color}12`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color}18, ${tech.color}08)`,
                    border: `1px solid ${tech.color}25`,
                  }}
                >
                  <img src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`} alt={tech.name} loading="lazy" className="w-4 h-4 opacity-80" />
                </div>
                <div>
                  <span className="font-mono text-[0.65rem] tracking-spaced uppercase text-foreground/60 block">{tech.name}</span>
                  <span className="text-[0.65rem] text-foreground/30 font-light mt-0.5 block">{tech.desc}</span>
                </div>
              </div>
            ))}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {specialties.map((item) => {
              const iconMap: Record<string, React.ReactNode> = {
                Globe: <Globe className="w-6 h-6" strokeWidth={1.5} />,
                FileText: <FileText className="w-6 h-6" strokeWidth={1.5} />,
                ShoppingCart: <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />,
                Monitor: <Monitor className="w-6 h-6" strokeWidth={1.5} />,
                Cpu: <Cpu className="w-6 h-6" strokeWidth={1.5} />,
                Bot: <Bot className="w-6 h-6" strokeWidth={1.5} />,
                Code2: <Code2 className="w-6 h-6" strokeWidth={1.5} />,
                Plug: <Plug className="w-6 h-6" strokeWidth={1.5} />,
              };
              return (
                <div
                  key={item.name}
                  className="group relative rounded-2xl p-7 md:p-8 flex flex-col items-start text-left cursor-default overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 specialty-card"
                  style={{
                    background: 'linear-gradient(145deg, hsl(220 30% 8% / 0.9), hsl(220 20% 5% / 0.95))',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Animated border glow - always visible */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      border: '1px solid hsl(0 0% 100% / 0.08)',
                      boxShadow: 'inset 0 1px 0 hsl(0 0% 100% / 0.06), 0 0 15px hsl(45 100% 49% / 0.04)',
                    }}
                  />
                  {/* Top border shine - always visible */}
                  <div className="absolute top-0 left-[15%] right-[15%] h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent, hsl(45 100% 49% / 0.25), transparent)',
                    }}
                  />
                  {/* Corner glow - always visible */}
                  <div className="absolute -top-1 -right-1 w-24 h-24 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, hsl(45 100% 49% / 0.06), transparent 70%)',
                    }}
                  />
                  {/* Hover intensify */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, hsl(45 100% 49% / 0.1), transparent 60%)',
                      boxShadow: '0 0 30px hsl(45 100% 49% / 0.06)',
                    }}
                  />

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10 text-primary/70 group-hover:text-primary transition-colors duration-300"
                    style={{
                      background: 'linear-gradient(135deg, hsl(45 100% 49% / 0.1), hsl(45 100% 49% / 0.03))',
                      border: '1px solid hsl(45 100% 49% / 0.12)',
                    }}
                  >
                    {iconMap[item.icon]}
                  </div>

                  {/* Title */}
                  <span className="font-mono text-[0.7rem] md:text-[0.75rem] tracking-spaced uppercase text-foreground/70 group-hover:text-primary transition-colors duration-300 relative z-10 block mb-3">
                    {item.name}
                  </span>

                  {/* Description */}
                  <span className="text-[0.75rem] text-foreground/30 group-hover:text-foreground/50 transition-colors duration-300 font-light leading-relaxed relative z-10">
                    {item.desc}
                  </span>
                </div>
              );
            })}
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
