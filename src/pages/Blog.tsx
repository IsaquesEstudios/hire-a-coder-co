import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";

// Posts will be loaded from Supabase
const posts: any[] = [];

export default function Blog() {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="service-card group">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
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
                    <span>{new Date(post.published_at).toLocaleDateString('pt-BR')}</span>
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

          {/* Empty State */}
          {posts.length === 0 && (
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
