import { Link } from "react-router-dom";

const services = [
  { name: "Criação de Site", href: "/servicos/criacao-de-site" },
  { name: "Landing Page", href: "/servicos/criacao-de-landing-page" },
  { name: "E-commerce", href: "/servicos/criacao-de-e-commerce" },
  { name: "Sistemas", href: "/servicos/desenvolvimento-de-sistema" },
  { name: "Software", href: "/servicos/desenvolvimento-de-software" },
  { name: "Automação", href: "/servicos/criacao-de-automacao" },
  { name: "IA", href: "/servicos/ia-para-empresas" },
];

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-[#3f3f3f] border-dashed">
      <div className="container-custom py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-mono text-foreground text-xs tracking-spaced uppercase">
                CONTRATAR<span className="text-primary">PROGRAMADOR</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm">
              Desenvolvemos soluções digitais de alta performance para empresas que buscam escalar seus negócios através da tecnologia.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[0.65rem] tracking-spaced uppercase text-muted-foreground mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-foreground/70 text-sm font-light hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[0.65rem] tracking-spaced uppercase text-muted-foreground mb-6">Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-foreground/70 text-sm font-light hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[0.65rem] tracking-spaced uppercase text-muted-foreground mb-6">Contato</h3>
            <div className="space-y-3 text-foreground/70 text-sm font-light">
              <p>contato@contratar<br />programador.com.br</p>
              <p>(11) 99999-9999</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-dashed border-[#3f3f3f]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[0.6rem] tracking-micro uppercase text-muted-foreground">
              © {new Date().getFullYear()} Contratar Programador — Todos os direitos reservados
            </p>
            <div className="flex gap-8">
              <Link to="/privacidade" className="font-mono text-[0.6rem] tracking-micro uppercase text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </Link>
              <Link to="/termos" className="font-mono text-[0.6rem] tracking-micro uppercase text-muted-foreground hover:text-primary transition-colors">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
