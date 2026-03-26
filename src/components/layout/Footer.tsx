import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Criação de Site", href: "/servicos/criacao-de-site" },
  { name: "Criação de Landing Page", href: "/servicos/criacao-de-landing-page" },
  { name: "Criação de E-commerce", href: "/servicos/criacao-de-e-commerce" },
  { name: "Desenvolvimento de Sistema", href: "/servicos/desenvolvimento-de-sistema" },
  { name: "Desenvolvimento de Software", href: "/servicos/desenvolvimento-de-software" },
  { name: "Criação de Automação", href: "/servicos/criacao-de-automacao" },
  { name: "IA para Empresas", href: "/servicos/ia-para-empresas" },
];

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-bold text-xl text-foreground">
                Contratar<span className="text-primary">Programador</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              Desenvolvemos soluções digitais de alta performance para empresas que buscam escalar seus negócios através da tecnologia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm tracking-wider uppercase text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-sm tracking-wider uppercase text-foreground mb-4">Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm tracking-wider uppercase text-foreground mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">contato@contratarprogramador.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Contratar Programador. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/privacidade" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
