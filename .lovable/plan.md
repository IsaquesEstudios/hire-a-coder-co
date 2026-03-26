

# Plano: Redesign Visual Inspirado no TitanGate

## Objetivo

Redesenhar o site "Contratar Programador" no estilo visual do TitanGate Equity -- fundo escuro dominante, tipografia grande e minimalista, animacoes elegantes, layout premium -- mantendo todos os textos e conteudos atuais em portugues sobre servicos de programacao.

## O que muda

### 1. Tema de Cores (index.css)
- Background principal: preto puro (#000000) em vez de branco
- Textos: branco/cinza claro sobre fundo escuro
- Manter amarelo #FABF00 como accent (similar ao dourado do TitanGate)
- Remover modo claro -- site sera 100% dark por padrao
- Bordas e separadores em cinza muito escuro (#1a1a1a)

### 2. Tipografia
- Adicionar fonte display (ex: Inter ou manter Montserrat) com pesos mais extremos (300 light para corpo, 800 bold para titulos)
- Titulos hero em tamanho maior (7xl-8xl) com letter-spacing negativo (estilo TitanGate)

### 3. Index.tsx -- Estrutura de Secoes Inspirada no TitanGate
- **Hero**: Fundo preto total, titulo gigante centralizado com palavra destacada em amarelo, subtitulo elegante, CTA minimalista
- **Marquee**: Manter mas com estilo mais discreto (texto branco fino, fundo transparente com borda)
- **Servicos**: Cards escuros com bordas sutis, hover com glow amarelo
- **Diferenciais (novo estilo)**: Formato comparativo tipo TitanGate ("X vs Y") -- ex: "Performance vs Sites Lentos", "Seguranca vs Vulnerabilidades"
- **Stats**: Numeros grandes com animacao de contagem
- **CTA Final**: Fundo preto com texto grande e botao amarelo

### 4. Header.tsx
- Transparente sobre hero, com backdrop-blur
- Logo e links em branco, CTA em amarelo
- Estilo mais minimalista (sem borda inferior visivel)

### 5. Footer.tsx
- Fundo preto, texto cinza, links discretos
- Layout mais limpo e espacado

### 6. Paginas de Servico
- Aplicar o mesmo tema dark
- Hero com tipografia grande
- Cards e secoes adaptados ao estilo escuro

### 7. Sobre.tsx e Contato.tsx
- Mesma adaptacao dark
- Formulario de contato com inputs escuros e borda amarela no focus

## Arquivos Editados

| Arquivo | Mudanca |
|---------|---------|
| `src/index.css` | Cores dark-first, tipografia, animacoes |
| `tailwind.config.ts` | Novas utilidades de spacing/font |
| `src/pages/Index.tsx` | Layout hero + secoes redesenhados |
| `src/components/layout/Header.tsx` | Header transparente minimalista |
| `src/components/layout/Footer.tsx` | Footer dark minimalista |
| `src/pages/Sobre.tsx` | Adaptacao dark |
| `src/pages/Contato.tsx` | Adaptacao dark |
| `src/pages/servicos/*.tsx` | Adaptacao dark (7 arquivos) |
| `src/components/forms/ContactForm.tsx` | Inputs dark |

## O que NAO muda

- Rotas e estrutura de navegacao
- Textos e conteudos em portugues
- Blog e SSG
- Funcionalidades (formulario, SEO, etc.)
- Supabase/backend

