import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface CheckboxOption {
  id: string;
  label: string;
}

interface ContactFormProps {
  checkboxOptions?: CheckboxOption[];
  submitLabel?: string;
}

export function ContactForm({ checkboxOptions, submitLabel = "Iniciar Conversa" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    selectedOptions: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      selectedOptions: [],
    });
    setIsSubmitting(false);
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      selectedOptions: checked
        ? [...prev.selectedOptions, id]
        : prev.selectedOptions.filter((opt) => opt !== id),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-secondary-foreground">Nome</Label>
          <Input
            id="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-muted border-muted"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-secondary-foreground">Email Corporativo</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-muted border-muted"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-secondary-foreground">Empresa</Label>
        <Input
          id="company"
          placeholder="Nome da empresa"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="bg-muted border-muted"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-secondary-foreground">Mensagem</Label>
        <Textarea
          id="message"
          placeholder="Conte sobre seu projeto..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={4}
          className="bg-muted border-muted resize-none"
        />
      </div>

      {checkboxOptions && checkboxOptions.length > 0 && (
        <div className="space-y-3">
          <Label className="text-secondary-foreground">Tipo de Projeto</Label>
          <div className="flex flex-wrap gap-4">
            {checkboxOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={formData.selectedOptions.includes(option.id)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(option.id, checked as boolean)
                  }
                />
                <Label
                  htmlFor={option.id}
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : submitLabel}
      </Button>
    </form>
  );
}
