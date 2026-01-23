import { useEffect, useState } from "react";

const SITEMAP_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/sitemap`;

const Sitemap = () => {
  const [xml, setXml] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await fetch(SITEMAP_URL);
        const text = await response.text();
        setXml(text);
      } catch (error) {
        console.error("Error fetching sitemap:", error);
        setXml('<?xml version="1.0" encoding="UTF-8"?><error>Failed to load sitemap</error>');
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  useEffect(() => {
    if (!loading && xml) {
      // Replace entire document with XML content
      document.open("text/xml");
      document.write(xml);
      document.close();
    }
  }, [xml, loading]);

  // This won't actually render since we replace the document
  return null;
};

export default Sitemap;
