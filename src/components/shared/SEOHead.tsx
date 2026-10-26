import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description }) => {
  useEffect(() => {
    // Update Document Title
    document.title = `${title} | Parvishaa Travels`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Scroll to top upon page navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title, description]);

  return null;
};
