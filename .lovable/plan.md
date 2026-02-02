
# Plano: Corrigir Erro de Hidratação SSG no Primeiro Acesso

## Problema Identificado

O site funciona após F5 (refresh), mas mostra erro `"<html>... is not valid JSON"` no primeiro acesso. Isso acontece porque:

1. O HTML estático é gerado corretamente durante o build com os dados do loader
2. Durante a **hidratação inicial**, o React Query tenta re-buscar os dados antes que o `useLoaderData()` tenha processado corretamente
3. Nesse momento, a condição `enabled` falha, permitindo que a query seja executada
4. O Supabase client faz uma requisição que retorna HTML (página de erro) em vez de JSON

## Solução

Implementar três camadas de proteção para garantir que a hidratação funcione corretamente:

### 1. Desabilitar re-fetch automático do React Query

Adicionar opções para prevenir que o React Query tente re-buscar dados desnecessariamente durante a hidratação.

### 2. Melhorar a lógica de enabled

Garantir que a query só seja habilitada quando realmente necessário (navegação SPA), não durante a hidratação inicial.

### 3. Adicionar validação do Supabase client

Verificar se as variáveis de ambiente estão definidas antes de tentar fazer requisições.

---

## Arquivos a Modificar

### `src/pages/Blog.tsx`

Atualizar a configuração do `useQuery` para prevenir re-fetch durante hidratação:

```tsx
const { data: clientPosts, isLoading } = useQuery({
  queryKey: ["blog-posts"],
  enabled: !preloadedPosts || preloadedPosts.length === 0,
  refetchOnMount: false,           // NOVO: Previne re-fetch ao montar
  refetchOnWindowFocus: false,     // NOVO: Previne re-fetch ao focar janela
  staleTime: 5 * 60 * 1000,        // ATUALIZADO: 5 minutos de cache
  queryFn: async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data;
  },
});
```

### `src/pages/BlogPost.tsx`

Mesma atualização para a query do post individual:

```tsx
const {
  data: clientPost,
  isLoading,
  isError,
} = useQuery({
  queryKey: ["blog-post", slug],
  enabled: !!slug && !preloadedPost,
  refetchOnMount: false,           // NOVO
  refetchOnWindowFocus: false,     // NOVO
  staleTime: 5 * 60 * 1000,        // ATUALIZADO
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
```

### `src/main.tsx`

Atualizar as configurações globais do QueryClient para SSG:

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,       // 5 minutos
      refetchOnMount: false,          // NOVO: Crítico para SSG
      refetchOnWindowFocus: false,    // NOVO: Evita re-fetch desnecessário
      refetchOnReconnect: false,      // NOVO: Evita re-fetch ao reconectar
      retry: 1,
    },
  },
});
```

### `src/integrations/supabase/client.ts`

Adicionar validação das variáveis de ambiente para evitar erros silenciosos:

```tsx
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Validação para garantir que as variáveis existem
if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.warn(
    'Supabase: Variáveis de ambiente não configuradas.',
    'VITE_SUPABASE_URL:', !!SUPABASE_URL,
    'VITE_SUPABASE_PUBLISHABLE_KEY:', !!SUPABASE_PUBLISHABLE_KEY
  );
}
```

---

## Fluxo Após as Mudanças

```text
┌─────────────────────────────────────────────────────────────┐
│                    Primeiro Acesso (SSG)                    │
├─────────────────────────────────────────────────────────────┤
│  1. Navegador carrega HTML pré-renderizado com dados        │
│  2. React Query detecta dados existentes (staleTime alto)   │
│  3. refetchOnMount: false → NÃO faz nova requisição         │
│  4. useLoaderData() retorna dados serializados              │
│  5. Página renderiza corretamente sem erros                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   Navegação SPA (Client)                    │
├─────────────────────────────────────────────────────────────┤
│  1. Usuário navega entre páginas                            │
│  2. preloadedPosts = undefined (navegação client-side)      │
│  3. enabled: true → Query é executada                       │
│  4. Supabase retorna dados JSON válidos                     │
│  5. Página renderiza com dados frescos                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Detalhes Técnicos

### Por que `refetchOnMount: false` resolve o problema?

O React Query, por padrão, tenta re-validar os dados quando um componente monta, mesmo que os dados estejam no cache. No contexto de SSG, isso causa:

1. A query é executada durante a hidratação
2. O Supabase client pode não estar totalmente configurado
3. A resposta pode ser HTML (erro) em vez de JSON

Com `refetchOnMount: false`, o React Query confia nos dados existentes e não faz requisições desnecessárias durante a hidratação inicial.

### Por que `staleTime` alto?

O `staleTime` define quanto tempo os dados são considerados "frescos". Com 5 minutos, evitamos re-buscas frequentes para conteúdo de blog que não muda com frequência.

### Ordem de Prioridade dos Dados

1. **Dados do SSG** (loader): Primeira prioridade durante hidratação
2. **Dados do React Query**: Fallback para navegação client-side
3. **Loading state**: Mostrado apenas durante busca real de dados

---

## Passos Após Implementação

1. Fazer rebuild do projeto
2. Deploy no Coolify com as variáveis de ambiente configuradas
3. Testar primeiro acesso (sem F5) para confirmar que o erro foi resolvido
4. Testar navegação entre páginas do blog

