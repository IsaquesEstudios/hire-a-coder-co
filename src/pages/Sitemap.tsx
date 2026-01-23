import { useEffect } from "react";

const SITEMAP_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/sitemap`;

const Sitemap = () => {
  useEffect(() => {
    // Redirect directly to the edge function
    window.location.replace(SITEMAP_URL);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      Redirecionando para o sitemap...
    </div>
  );
};

export default Sitemap;
