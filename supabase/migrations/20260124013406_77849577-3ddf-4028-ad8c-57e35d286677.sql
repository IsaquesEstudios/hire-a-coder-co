-- Criar bucket público para imagens do blog
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

-- Política: Qualquer um pode visualizar imagens do bucket
CREATE POLICY "Imagens públicas para leitura"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Política: Permitir upload via service role (edge function)
CREATE POLICY "Upload via service role"
ON storage.objects FOR INSERT
TO service_role
WITH CHECK (bucket_id = 'blog-images');

-- Política: Permitir deleção via service role
CREATE POLICY "Delete via service role"
ON storage.objects FOR DELETE
TO service_role
USING (bucket_id = 'blog-images');