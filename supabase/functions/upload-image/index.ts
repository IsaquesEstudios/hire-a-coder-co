import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // POST - Upload image
    if (req.method === "POST") {
      const contentType = req.headers.get("content-type") || "";
      
      let fileBuffer: ArrayBuffer;
      let mimeType: string;
      let originalExtension: string;

      // Check if it's FormData or raw binary
      if (contentType.includes("multipart/form-data")) {
        // FormData upload (from web forms)
        const formData = await req.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
          return new Response(
            JSON.stringify({ error: "Nenhum arquivo enviado" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        // Validate file type
        if (!ALLOWED_TYPES.includes(file.type)) {
          return new Response(
            JSON.stringify({ error: "Tipo de arquivo não permitido. Use: JPEG, PNG, WebP ou GIF" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        // Validate file size
        if (file.size > MAX_SIZE) {
          return new Response(
            JSON.stringify({ error: "Arquivo muito grande. Máximo: 5MB" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        fileBuffer = await file.arrayBuffer();
        mimeType = file.type;
        originalExtension = file.name.split(".").pop() || "jpg";
      } else {
        // Raw binary upload (from n8n, APIs, etc.)
        fileBuffer = await req.arrayBuffer();
        
        if (fileBuffer.byteLength === 0) {
          return new Response(
            JSON.stringify({ error: "Nenhum arquivo enviado" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        // Validate file size
        if (fileBuffer.byteLength > MAX_SIZE) {
          return new Response(
            JSON.stringify({ error: "Arquivo muito grande. Máximo: 5MB" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        // Detect mime type from content-type header or magic bytes
        if (contentType.includes("image/")) {
          mimeType = contentType.split(";")[0].trim();
        } else {
          // Try to detect from magic bytes
          const bytes = new Uint8Array(fileBuffer.slice(0, 12));
          if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
            mimeType = "image/jpeg";
          } else if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
            mimeType = "image/png";
          } else if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
            mimeType = "image/gif";
          } else if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
                     bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) {
            mimeType = "image/webp";
          } else {
            return new Response(
              JSON.stringify({ error: "Tipo de arquivo não detectado. Envie com Content-Type correto ou use JPEG, PNG, WebP ou GIF" }),
              { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
          }
        }

        if (!ALLOWED_TYPES.includes(mimeType)) {
          return new Response(
            JSON.stringify({ error: "Tipo de arquivo não permitido. Use: JPEG, PNG, WebP ou GIF" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        // Get extension from mime type
        const extMap: Record<string, string> = {
          "image/jpeg": "jpg",
          "image/png": "png",
          "image/webp": "webp",
          "image/gif": "gif",
        };
        originalExtension = extMap[mimeType] || "jpg";
      }

      // Generate unique filename
      const timestamp = Date.now();
      const randomId = crypto.randomUUID().slice(0, 8);
      const fileName = `${timestamp}-${randomId}.${originalExtension}`;

      // Upload to storage
      const { data, error } = await supabase.storage
        .from("blog-images")
        .upload(fileName, fileBuffer, {
          contentType: mimeType,
          upsert: false,
        });

      if (error) {
        console.error("Upload error:", error);
        return new Response(
          JSON.stringify({ error: "Erro ao fazer upload da imagem" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("blog-images")
        .getPublicUrl(fileName);

      return new Response(
        JSON.stringify({
          success: true,
          url: urlData.publicUrl,
          path: fileName,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // DELETE - Remove image
    if (req.method === "DELETE") {
      const url = new URL(req.url);
      const path = url.searchParams.get("path");

      if (!path) {
        return new Response(
          JSON.stringify({ error: "Parâmetro 'path' é obrigatório" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { error } = await supabase.storage
        .from("blog-images")
        .remove([path]);

      if (error) {
        console.error("Delete error:", error);
        return new Response(
          JSON.stringify({ error: "Erro ao remover imagem" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true, message: "Imagem removida com sucesso" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Método não permitido" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
