import { Head } from "vite-react-ssg";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
}

export const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  type = "website",
  canonical 
}: SEOProps) => {
  const siteName = "Hire a Coder";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};

export default SEO;
