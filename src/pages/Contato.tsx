import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { ContactForm } from "@/components/forms/ContactForm";

const contactInfo = [
  { title: "Email", value: "contato@contratarprogramador.com.br" },
  { title: "Telefone", value: "(11) 99999-9999" },
  { title: "Localização", value: "São Paulo, SP - Brasil" },
  { title: "Horário", value: "Seg - Sex: 9h às 18h" },
];

export default function Contato() {
  return (
    <Layout>
      <SEO title="Contato" description="Entre em contato com a Contratar Programador. Solicite um orçamento para desenvolvimento de sites, sistemas, e-commerce, automação e IA para sua empresa." />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-end pb-16 bg-background pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="mono-label">Contato</p>
            </div>
            <div className="lg:col-span-9">
              <h1 className="text-h2 font-light tracking-heading text-foreground leading-[0.95] mb-8">
                Vamos Conversar Sobre Seu <span className="text-primary">Projeto</span>
              </h1>
              <p className="body-large text-foreground/60">
                Preencha o formulário abaixo ou entre em contato diretamente. Respondemos em até 24 horas úteis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-dashed" />

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4">
              <p className="mono-label mb-8">Informações</p>
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.title}>
                    <p className="mono-label text-primary mb-1">{info.title}</p>
                    <p className="text-foreground/70 text-sm font-light">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <p className="mono-label mb-8">Envie Sua Mensagem</p>
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
      </section>
    </Layout>
  );
}
