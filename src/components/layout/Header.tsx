import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "Criação de Site", href: "/servicos/criacao-de-site" },
  { name: "Criação de Landing Page", href: "/servicos/criacao-de-landing-page" },
  { name: "Criação de E-commerce", href: "/servicos/criacao-de-e-commerce" },
  { name: "Desenvolvimento de Sistema", href: "/servicos/desenvolvimento-de-sistema" },
  { name: "Desenvolvimento de Software", href: "/servicos/desenvolvimento-de-software" },
  { name: "Criação de Automação", href: "/servicos/criacao-de-automacao" },
  { name: "IA para Empresas", href: "/servicos/ia-para-empresas" },
];

const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos", hasDropdown: true },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        {/* Spacer left */}
        <div className="flex-1" />

        {/* Center Logo — like TitanGate */}
        <Link to="/" className="z-10">
          <span className="font-mono text-foreground text-xs tracking-spaced uppercase">
            CONTRATAR<span className="text-primary">PROGRAMADOR</span>
          </span>
        </Link>

        {/* Right CTA */}
        <div className="flex-1 flex justify-end z-10">
          <Link
            to="/contato"
            className="hidden md:inline-flex nav-pill font-mono text-foreground text-[0.65rem] tracking-spaced uppercase px-5 py-2.5 hover:text-primary transition-colors"
          >
            Orçar Projeto
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-[#3f3f3f] absolute top-full left-0 right-0">
          <div className="px-6 py-8 space-y-4">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="space-y-3">
                  <span className="block font-mono text-[0.65rem] tracking-spaced uppercase text-foreground">
                    {item.name}
                  </span>
                  <div className="pl-4 space-y-3 border-l border-[#3f3f3f]">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block font-mono text-[0.65rem] tracking-micro uppercase text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-mono text-[0.65rem] tracking-spaced uppercase transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
