import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    // GET - Listar posts publicados
    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // POST - Criar novo post
    if (req.method === "POST") {
      const body = await req.json();

      if (!body.title || !body.slug || !body.content) {
        return new Response(
          JSON.stringify({ error: "Campos obrigatórios: title, slug, content" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const postData = {
        title: body.title,
        slug: body.slug,
        content: body.content,
        excerpt: body.excerpt || null,
        cover_image: body.cover_image || null,
        author: body.author || "Equipe",
        tags: body.tags || null,
        meta_title: body.meta_title || null,
        meta_description: body.meta_description || null,
        published: body.published || false,
        published_at: body.published ? new Date().toISOString() : null,
      };

      const { data, error } = await supabase
        .from("blog_posts")
        .insert(postData)
        .select()
        .single();

      if (error) throw error;

      return new Response(JSON.stringify(data), {
        status: 201,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // PUT - Atualizar post existente
    if (req.method === "PUT") {
      if (!id) {
        return new Response(
          JSON.stringify({ error: "ID do post é obrigatório" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const body = await req.json();
      const updateData: Record<string, unknown> = {};

      if (body.title !== undefined) updateData.title = body.title;
      if (body.slug !== undefined) updateData.slug = body.slug;
      if (body.content !== undefined) updateData.content = body.content;
      if (body.excerpt !== undefined) updateData.excerpt = body.excerpt;
      if (body.cover_image !== undefined) updateData.cover_image = body.cover_image;
      if (body.author !== undefined) updateData.author = body.author;
      if (body.tags !== undefined) updateData.tags = body.tags;
      if (body.meta_title !== undefined) updateData.meta_title = body.meta_title;
      if (body.meta_description !== undefined) updateData.meta_description = body.meta_description;
      if (body.published !== undefined) {
        updateData.published = body.published;
        if (body.published) {
          updateData.published_at = new Date().toISOString();
        }
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // DELETE - Remover post
    if (req.method === "DELETE") {
      if (!id) {
        return new Response(
          JSON.stringify({ error: "ID do post é obrigatório" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (error) throw error;

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ error: "Método não permitido" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
