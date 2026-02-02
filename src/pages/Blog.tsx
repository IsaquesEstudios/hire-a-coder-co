import { Link, useLoaderData } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import type { Tables } from "@/integrations/supabase/types";

type BlogPostType = Tables<"blog_posts">;

// Loader para SSG - carrega lista de posts durante o build
export async function blogListLoader(): Promise<{ posts: BlogPostType[] }> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("SSG Blog List Loader: Erro:", error);
      return { posts: [] };
    }

    console.log("SSG Blog List Loader: Posts carregados:", data?.length || 0);
    return { posts: data || [] };
  } catch (e) {
    console.error("SSG Blog List Loader: Exceção:", e);
    return { posts: [] };
  }
}

export default function Blog() {
  // Dados pré-carregados pelo loader (SSG)
  const loaderData = useLoaderData() as { posts: BlogPostType[] } | undefined;
  const preloadedPosts = loaderData?.posts;

  // Query client-side como fallback (navegação SPA)
  const { data: clientPosts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    enabled: !preloadedPosts, // Só busca se não tiver dados do loader
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    staleTime: 60 * 1000,
  });

  // Usa dados do loader primeiro, fallback para client query
  const posts = preloadedPosts || clientPosts || [];
  const showLoading = !preloadedPosts && isLoading;

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Artigos sobre desenvolvimento de software, automação, e-commerce, IA e tecnologia para empresas. Dicas práticas para escalar seu negócio digital."
      />

      {/* Hero */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              BLOG
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Insights sobre <span className="text-primary">Tecnologia e Negócios</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Artigos práticos sobre desenvolvimento, automação e estratégias digitais para escalar sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {showLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="service-card">
                  <Skeleton className="h-4 w-20 mb-4" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="service-card group">
                  {post.cover_image && (
                    <img 
                      src={post.cover_image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.category && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    )}
                    {post.tags?.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 bg-accent text-foreground text-xs font-semibold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {post.published_at 
                          ? new Date(post.published_at).toLocaleDateString('pt-BR')
                          : new Date(post.created_at).toLocaleDateString('pt-BR')
                        }
                      </span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">Nenhum artigo publicado ainda</h3>
              <p className="text-muted-foreground">
                Em breve teremos conteúdo exclusivo para você.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Quer Receber Nossos Artigos?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Assine nossa newsletter e receba dicas práticas sobre tecnologia e negócios diretamente no seu email.
          </p>
          <Button asChild variant="dark" size="xl">
            <Link to="/contato">
              Entrar em Contato
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
