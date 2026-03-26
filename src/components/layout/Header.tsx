import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
        {/* Logo */}
        <Link to="/" className="z-10">
          <span className="font-mono text-foreground text-xs tracking-spaced uppercase">
            CONTRATAR<span className="text-primary">PROGRAMADOR</span>
          </span>
        </Link>

        {/* Desktop Nav — TitanGate pill style */}
        <div className="hidden lg:flex items-center">
          <div className="nav-pill flex items-center gap-0 px-4">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="font-mono text-foreground text-[0.7rem] tracking-spaced uppercase px-4 py-3 hover:text-primary transition-colors">
                    {item.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="bg-black/90 backdrop-blur-xl border-[#3f3f3f] rounded-sm min-w-[240px]">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.href} asChild>
                        <Link
                          to={service.href}
                          className={`font-mono text-[0.7rem] tracking-micro uppercase w-full ${isActive(service.href) ? "text-primary" : "text-foreground/70"}`}
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-mono text-[0.7rem] tracking-spaced uppercase px-4 py-3 transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* CTA — TitanGate icon-button style */}
        <div className="hidden lg:block z-10">
          <Link
            to="/contato"
            className="nav-pill font-mono text-foreground text-[0.7rem] tracking-spaced uppercase px-5 py-3 hover:text-primary transition-colors"
          >
            Orçar Projeto →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-[#3f3f3f] absolute top-full left-0 right-0">
          <div className="px-6 py-8 space-y-6">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="space-y-3">
                  <span className="block font-mono text-[0.7rem] tracking-spaced uppercase text-foreground">
                    {item.name}
                  </span>
                  <div className="pl-4 space-y-3 border-l border-[#3f3f3f]">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block font-mono text-[0.7rem] tracking-micro uppercase text-muted-foreground hover:text-primary transition-colors"
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
                  className={`block font-mono text-[0.7rem] tracking-spaced uppercase transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-[#3f3f3f]">
              <Link
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center nav-pill font-mono text-foreground text-[0.7rem] tracking-spaced uppercase px-5 py-3"
              >
                Orçar Projeto →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
