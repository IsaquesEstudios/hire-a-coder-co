import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { ContactForm } from "@/components/forms/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@contratarprogramador.com.br",
    href: "mailto:contato@contratarprogramador.com.br",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "São Paulo, SP - Brasil",
    href: null,
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg - Sex: 9h às 18h",
    href: null,
  },
];

export default function Contato() {
  return (
    <Layout>
      <SEO
        title="Contato"
        description="Entre em contato com a Contratar Programador. Solicite um orçamento para desenvolvimento de sites, sistemas, e-commerce, automação e IA para sua empresa."
      />

      {/* Hero */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              CONTATO
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Vamos Conversar Sobre Seu <span className="text-primary">Projeto</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo ou entre em contato diretamente. Respondemos em até 24 horas úteis.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const Content = (
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={info.title} href={info.href} className="block hover:opacity-80 transition-opacity">
                      {Content}
                    </a>
                  ) : (
                    <div key={info.title}>{Content}</div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-accent rounded-lg">
                <h3 className="font-bold mb-2">Resposta Rápida</h3>
                <p className="text-muted-foreground text-sm">
                  Para projetos urgentes, entre em contato pelo WhatsApp que respondemos em tempo real durante o horário comercial.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-secondary-foreground mb-6">
                  Envie Sua Mensagem
                </h2>
                
                <ContactForm 
                  checkboxOptions={[
                    { id: "site", label: "Site" },
                    { id: "landing", label: "Landing Page" },
                    { id: "ecommerce", label: "E-commerce" },
                    { id: "sistema", label: "Sistema" },
                    { id: "software", label: "Software" },
                    { id: "automacao", label: "Automação" },
                    { id: "ia", label: "IA" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
