// src/components/seo/SEO.tsx

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

// 1. Exportação NOMEADA (Resolve o erro: import { SEO } from ...)
export const SEO = ({ title, description, image, url, type }: SEOProps) => {
  return null;
};

// 2. Exportação DEFAULT (Previne erro se algum arquivo usar: import SEO from ...)
export default SEO;
