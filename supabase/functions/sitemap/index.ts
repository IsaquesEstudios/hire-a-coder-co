import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BASE_URL = Deno.env.get("SITE_URL") || "https://hire-a-coder-co.lovable.app";

const STATIC_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "daily", priority: "0.9" },
  { path: "/contato", changefreq: "monthly", priority: "0.7" },
  { path: "/servicos/criacao-de-site", changefreq: "monthly", priority: "0.8" },
  { path: "/servicos/criacao-de-landing-page", changefreq: "monthly", priority: "0.8" },
  { path: "/servicos/criacao-de-e-commerce", changefreq: "monthly", priority: "0.8" },
  { path: "/servicos/desenvolvimento-de-sistema", changefreq: "monthly", priority: "0.8" },
  { path: "/servicos/desenvolvimento-de-software", changefreq: "monthly", priority: "0.8" },
  { path: "/servicos/criacao-de-automacao", changefreq: "monthly", priority: "0.8" },
  { path: "/servicos/ia-para-empresas", changefreq: "monthly", priority: "0.8" },
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Buscar posts publicados
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("slug, updated_at")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error) throw error;

    // Gerar XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Adicionar páginas estáticas
    for (const page of STATIC_PAGES) {
      xml += `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    }

    // Adicionar posts do blog
    if (posts) {
      for (const post of posts) {
        const lastmod = post.updated_at.split("T")[0];
        xml += `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      }
    }

    xml += `
</urlset>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400", // 24 hours cache
      },
    });
  } catch (error) {
    console.error("Error:", error);
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><error>${message}</error>`,
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/xml" } }
    );
  }
});
