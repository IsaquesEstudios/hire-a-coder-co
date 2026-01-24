

# Endpoint para Upload de Imagens

## Visão Geral

Criar um sistema completo para upload de imagens que utiliza o **Storage** do Lovable Cloud para armazenar os arquivos, retornando uma URL pública que pode ser salva no campo `cover_image` dos posts do blog.

## Por que Storage ao invés do Banco de Dados?

Armazenar imagens diretamente no banco de dados causa:
- Esgotamento rápido do espaço em disco
- Degradação de performance
- Custos elevados

A abordagem correta é:
1. Fazer upload da imagem para o Storage
2. Obter a URL pública do arquivo
3. Salvar apenas a URL no banco de dados

## Arquitetura da Solução

```text
+------------------+     +-------------------+     +------------------+
|                  |     |                   |     |                  |
|  Cliente envia   | --> | Edge Function     | --> | Storage Bucket   |
|  imagem (POST)   |     | upload-image      |     | blog-images      |
|                  |     |                   |     |                  |
+------------------+     +--------+----------+     +--------+---------+
                                  |                         |
                                  v                         v
                         +--------+-------------------------+---------+
                         |                                            |
                         |  Retorna URL pública da imagem             |
                         |  Ex: https://...supabase.co/storage/v1/... |
                         |                                            |
                         +--------------------------------------------+
```

## Etapas de Implementação

### 1. Criar Storage Bucket

Criar um bucket público chamado `blog-images` para armazenar as imagens dos posts.

**Migração SQL:**
```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

CREATE POLICY "Imagens públicas para leitura"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

CREATE POLICY "Upload via service role"
ON storage.objects FOR INSERT
TO service_role
WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Delete via service role"
ON storage.objects FOR DELETE
TO service_role
USING (bucket_id = 'blog-images');
```

### 2. Criar Edge Function de Upload

**Arquivo:** `supabase/functions/upload-image/index.ts`

A função irá:
- Receber imagem via FormData (POST)
- Validar tipo de arquivo (apenas imagens)
- Gerar nome único para evitar conflitos
- Fazer upload para o bucket
- Retornar URL pública

**Endpoints:**

| Método | Descrição |
|--------|-----------|
| POST   | Upload de nova imagem, retorna URL |
| DELETE | Remove imagem pelo path |

**Exemplo de uso:**
```javascript
// Upload
const formData = new FormData();
formData.append('file', imageFile);

const response = await fetch('/functions/v1/upload-image', {
  method: 'POST',
  body: formData
});

const { url } = await response.json();
// url = "https://.../storage/v1/object/public/blog-images/abc123.jpg"
```

### 3. Configurar Edge Function

Adicionar configuração para a nova função em `supabase/config.toml` sem verificação JWT (público).

## Detalhes Técnicos

### Validações Implementadas

- **Tipos aceitos:** JPEG, PNG, WebP, GIF
- **Tamanho máximo:** 5MB
- **Nome do arquivo:** Timestamp + UUID + extensão original

### Resposta de Sucesso

```json
{
  "success": true,
  "url": "https://.../storage/v1/object/public/blog-images/1706123456789-abc123.jpg",
  "path": "1706123456789-abc123.jpg"
}
```

### Resposta de Erro

```json
{
  "error": "Tipo de arquivo não permitido. Use: JPEG, PNG, WebP ou GIF"
}
```

## Arquivos a Criar/Modificar

| Arquivo | Ação | Descrição |
|---------|------|-----------|
| Migração SQL | Criar | Bucket + políticas RLS |
| `supabase/functions/upload-image/index.ts` | Criar | Edge function de upload |
| `supabase/config.toml` | Modificar | Adicionar config da função |

## Resultado Final

Após a implementação, você terá:

1. **Endpoint de upload:** `POST /functions/v1/upload-image`
2. **Endpoint de delete:** `DELETE /functions/v1/upload-image?path=nome-arquivo.jpg`
3. **Bucket público:** `blog-images` para armazenar imagens
4. **URLs públicas:** Imagens acessíveis via URL direta

