

# Plano: Endpoints para Blog Posts e Sitemap

## Objetivo
Criar duas Edge Functions no backend:
1. **blog-posts**: Para gerenciar postagens do blog (criar, atualizar, deletar)
2. **sitemap**: Para gerar o sitemap.xml dinamicamente com todas as páginas e posts

---

## 1. Edge Function: `blog-posts`

### Funcionalidades
| Método | Ação | Descrição |
|--------|------|-----------|
| GET | Listar posts | Retorna todos os posts publicados |
| POST | Criar post | Cria uma nova postagem |
| PUT | Atualizar post | Atualiza uma postagem existente |
| DELETE | Deletar post | Remove uma postagem |

### Campos aceitos no POST/PUT
- `title` (obrigatório)
- `slug` (obrigatório)
- `content` (obrigatório)
- `excerpt`
- `cover_image`
- `author`
- `tags` (array de strings)
- `meta_title`
- `meta_description`
- `published` (boolean)

### Arquivo
`supabase/functions/blog-posts/index.ts`

---

## 2. Edge Function: `sitemap`

### Funcionalidades
- Retorna um XML no formato sitemap padrão
- Inclui automaticamente todas as páginas estáticas:
  - `/`
  - `/sobre`
  - `/blog`
  - `/contato`
  - `/servicos/criacao-de-site`
  - `/servicos/criacao-de-landing-page`
  - `/servicos/criacao-de-e-commerce`
  - `/servicos/desenvolvimento-de-sistema`
  - `/servicos/desenvolvimento-de-software`
  - `/servicos/criacao-de-automacao`
  - `/servicos/ia-para-empresas`
- Busca dinamicamente os posts publicados do banco e adiciona `/blog/{slug}`

### Arquivo
`supabase/functions/sitemap/index.ts`

---

## 3. Configuração

### supabase/config.toml
Adicionar configuração para desabilitar verificação JWT (endpoints públicos):
```toml
[functions.blog-posts]
verify_jwt = false

[functions.sitemap]
verify_jwt = false
```

---

## Detalhes Técnicos

### Estrutura de arquivos a criar
```text
supabase/
└── functions/
    ├── blog-posts/
    │   └── index.ts
    └── sitemap/
        └── index.ts
```

### Dependências
- Utiliza `@supabase/supabase-js` via Deno
- CORS habilitado para permitir chamadas do frontend

### Exemplo de uso do endpoint blog-posts

**Criar post:**
```bash
POST /blog-posts
Content-Type: application/json

{
  "title": "Meu Primeiro Post",
  "slug": "meu-primeiro-post",
  "content": "Conteúdo do post...",
  "excerpt": "Resumo do post",
  "tags": ["tecnologia", "web"],
  "published": true
}
```

**Atualizar post:**
```bash
PUT /blog-posts?id=uuid-do-post
Content-Type: application/json

{
  "title": "Título Atualizado"
}
```

**Deletar post:**
```bash
DELETE /blog-posts?id=uuid-do-post
```

### Exemplo de resposta do sitemap
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hire-a-coder-co.lovable.app/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hire-a-coder-co.lovable.app/blog/meu-primeiro-post</loc>
    <lastmod>2026-01-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  ...
</urlset>
```

---

## Resumo das Alterações

| Arquivo | Ação |
|---------|------|
| `supabase/functions/blog-posts/index.ts` | Criar |
| `supabase/functions/sitemap/index.ts` | Criar |
| `supabase/config.toml` | Editar (adicionar config das functions) |

