import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { BookOpen } from "lucide-react";
import { siteSections, type SitePage } from "@/config/sitePages";
import { supabase } from "@/integrations/supabase/client";

export default function MapaDoSite() {
  // Buscar posts do blog publicados
  const { data: blogPosts } = useQuery({
    queryKey: ["blog-posts-sitemap"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("title, slug")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  // Converter posts do blog para o formato de páginas
  const blogPages: SitePage[] = (blogPosts || []).map((post) => ({
    name: post.title,
    href: `/blog/${post.slug}`,
    icon: BookOpen,
  }));

  return (
    <Layout>
      <SEO
        title="Mapa do Site"
        description="Navegue por todas as páginas do nosso site. Encontre facilmente serviços, informações e conteúdos."
        canonical="https://contratarumprogramador.com.br/mapa-do-site"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mapa do Site
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Navegue por todas as páginas disponíveis no nosso site.
            </p>

            <div className="space-y-12">
              {/* Seções estáticas (Principal e Serviços) */}
              {siteSections.map((section) => (
                <div key={section.category}>
                  <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
                    {section.category}
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((page) => {
                      const Icon = page.icon;
                      return (
                        <li key={page.href}>
                          <Link
                            to={page.href}
                            className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-primary/20 transition-colors group"
                          >
                            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {page.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {/* Seção de Blog (dinâmica) */}
              {blogPages.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
                    Artigos do Blog
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {blogPages.map((page) => {
                      const Icon = page.icon;
                      return (
                        <li key={page.href}>
                          <Link
                            to={page.href}
                            className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-primary/20 transition-colors group"
                          >
                            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-foreground group-hover:text-primary transition-colors line-clamp-1">
                              {page.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
