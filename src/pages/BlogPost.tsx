import { Link, useParams, useLoaderData } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowLeft } from "lucide-react";
import DOMPurify from "dompurify";

import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type BlogPostType = Tables<"blog_posts">;

// Loader para SSG - carrega dados durante o build
export async function blogPostLoader({ params }: LoaderFunctionArgs): Promise<{ post: BlogPostType | null }> {
  const { slug } = params;
  
  if (!slug) {
    return { post: null };
  }

  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();

    if (error) {
      console.error("SSG Loader: Erro ao buscar post:", error);
      return { post: null };
    }

    console.log("SSG Loader: Post carregado:", data?.title || "não encontrado");
    return { post: data };
  } catch (e) {
    console.error("SSG Loader: Exceção:", e);
    return { post: null };
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  // Dados pré-carregados pelo loader (SSG)
  const loaderData = useLoaderData() as { post: BlogPostType | null } | undefined;
  const preloadedPost = loaderData?.post;

  // Query client-side como fallback (navegação SPA)
  const {
    data: clientPost,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog-post", slug],
    enabled: !!slug && !preloadedPost, // Só busca se não tiver dados do loader
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .eq("published", true)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  // Usa dados do loader primeiro, fallback para client query
  const post = preloadedPost || clientPost;
  const showLoading = !preloadedPost && isLoading;
  const showError = !preloadedPost && (isError || (!isLoading && !post));

  const title = post?.meta_title || post?.title || "Post do Blog";
  const description = post?.meta_description || post?.excerpt || "Artigo do nosso blog.";

  return (
    <Layout>
      <SEO 
        title={title} 
        description={description}
        image={post?.cover_image || undefined}
        type="article"
      />

      <main className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao blog
              </Link>
            </Button>

            {showLoading ? (
              <article className="space-y-6">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-64 w-full" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-10/12" />
                </div>
              </article>
            ) : showError || !post ? (
              <div className="text-center py-16">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Post não encontrado</h1>
                <p className="text-muted-foreground mb-6">
                  Esse conteúdo pode ter sido removido ou ainda não está publicado.
                </p>
                <Button asChild variant="outline">
                  <Link to="/blog">Ver todos os posts</Link>
                </Button>
              </div>
            ) : (
              <article>
                <header className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.category && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    )}
                    {post.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent text-foreground text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString("pt-BR")
                        : new Date(post.created_at).toLocaleDateString("pt-BR")}
                    </span>
                    {post.author && (
                      <>
                        <span className="text-muted-foreground/50">•</span>
                        <span>{post.author}</span>
                      </>
                    )}
                  </div>
                </header>

                {post.cover_image && (
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-72 md:h-96 object-cover rounded-xl mb-8"
                    loading="lazy"
                  />
                )}

                {post.excerpt && <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>}

                <section 
                  className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                />
              </article>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
