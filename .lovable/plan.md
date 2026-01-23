
# Plano: Sitemap no Mesmo Domínio para Google Search Console

## Problema
O Google Search Console não aceita sitemaps hospedados em domínios externos. O sitemap atual está em `https://vnqandqsblkbwblfwkea.supabase.co/functions/v1/sitemap`, mas precisa estar em `https://contratarumprogramador.com.br/sitemap.xml`.

## Solução Proposta

A melhor solução é criar uma **página React dedicada** que busca o conteúdo do sitemap da edge function e o exibe como XML. Isso permite que `/sitemap.xml` seja servido diretamente do seu domínio.

### O que será feito:

1. **Criar página `Sitemap.tsx`**
   - Nova página React que faz fetch do conteúdo da edge function
   - Retorna o XML puro com o Content-Type correto
   - Caminho: `src/pages/Sitemap.tsx`

2. **Adicionar rota `/sitemap.xml`**
   - Registrar a nova rota no `App.tsx`
   - A rota `/sitemap.xml` vai renderizar o conteúdo XML

3. **Atualizar `robots.txt`**
   - Adicionar referência ao sitemap local:
   ```
   Sitemap: https://contratarumprogramador.com.br/sitemap.xml
   ```

### Resultado Final
- URL do sitemap: `https://contratarumprogramador.com.br/sitemap.xml`
- Compatível com Google Search Console
- Busca dados dinamicamente da edge function existente

---

## Detalhes Técnicos

### Arquivos a criar/modificar:

| Arquivo | Ação |
|---------|------|
| `src/pages/Sitemap.tsx` | Criar - Componente que renderiza XML |
| `src/App.tsx` | Modificar - Adicionar rota `/sitemap.xml` |
| `public/robots.txt` | Modificar - Adicionar linha do Sitemap |

### Componente Sitemap.tsx

O componente vai:
1. Usar `useEffect` para buscar o XML da edge function
2. Definir o `document.contentType` para XML
3. Renderizar o conteúdo XML diretamente na página

### Limitação Importante

Como React renderiza HTML, o navegador vai mostrar o XML mas com wrapper HTML. Para o Google, isso pode não ser ideal. Uma alternativa melhor seria:

**Alternativa: Arquivo XML Estático Gerado**
- Criar um script que gera `public/sitemap.xml` estaticamente
- Funciona perfeitamente com o Google
- Desvantagem: precisa regenerar manualmente quando adicionar posts

### Recomendação Final

A solução mais robusta para CyberPanel seria usar a **Context do LiteSpeed** corretamente. Se a opção de proxy não funcionou, vamos tentar a abordagem de **Rewrite Externo**:

```apache
RewriteEngine On
RewriteCond %{REQUEST_URI} ^/sitemap\.xml$
RewriteRule ^(.*)$ https://vnqandqsblkbwblfwkea.supabase.co/functions/v1/sitemap [P,L]
```

Mas se preferir a solução via código React, posso implementar.
