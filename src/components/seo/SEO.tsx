// src/components/seo/SEO.tsx

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
}

// Componente SEO simples sem react-helmet-async para evitar problemas com SSG
export const SEO = ({ title, description, image, url, type, canonical }: SEOProps) => {
  // Este componente não renderiza nada visualmente
  // As meta tags são gerenciadas via index.html ou durante o build SSG
  return null;
};

export default SEO;
