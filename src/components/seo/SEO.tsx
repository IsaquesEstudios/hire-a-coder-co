// src/components/seo/SEO.tsx
// Versão limpa para corrigir o erro de build.
// Removemos a importação do "react-helmet-async".

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ title, description, image, url, type }: SEOProps) => {
  // Retornamos null para não quebrar o código que chama este componente.
  // Futuramente, podemos reimplementar o SEO de outra forma.
  return null;
};

export default SEO;
