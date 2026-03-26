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
    <footer className="bg-background border-t border-dashed border-[#3f3f3f]">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[0.6rem] tracking-micro uppercase text-muted-foreground">
            ©{new Date().getFullYear()} Contratar Programador
          </p>
          <p className="font-mono text-[0.6rem] tracking-micro uppercase text-muted-foreground">
            Todos os direitos reservados
          </p>
          <div className="flex gap-6">
            <Link to="/sobre" className="font-mono text-[0.6rem] tracking-micro uppercase text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link to="/blog" className="font-mono text-[0.6rem] tracking-micro uppercase text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contato" className="font-mono text-[0.6rem] tracking-micro uppercase text-muted-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
