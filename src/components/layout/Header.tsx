import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">&lt;/&gt;</span>
          </div>
          <span className="font-bold text-xl hidden sm:block">
            Contratar<span className="text-primary">Programador</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-foreground"}`}>
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link
                        to={service.href}
                        className={`w-full ${isActive(service.href) ? "text-primary" : ""}`}
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
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-foreground"}`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <Link to="/contato">Orçar Projeto</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container-custom py-4 space-y-4">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="space-y-2">
                  <span className="block text-sm font-semibold text-foreground">
                    {item.name}
                  </span>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className={`block text-sm transition-colors hover:text-primary ${isActive(service.href) ? "text-primary" : "text-muted-foreground"}`}
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
                  className={`block text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-foreground"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <Button asChild variant="hero" className="w-full">
              <Link to="/contato" onClick={() => setMobileMenuOpen(false)}>
                Orçar Projeto
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
