import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioPages from "./pages/PortfolioPages";
import ExamArtifactsModal from "./components/ExamArtifactsModal";
import type { PageKey } from "./types";
import { BRAND_NAME, EMAIL, PHONE } from "./constants";

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: BRAND_NAME,
      jobTitle: "Computer Engineering Student",
      url: "/",
      email: EMAIL,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jos",
        addressRegion: "Plateau State",
        addressCountry: "NG",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Ahmadu Bello University, Zaria",
      },
    },
    {
      "@type": "WebSite",
      name: BRAND_NAME,
      url: "/",
    },
  ],
};

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [examOpen, setExamOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(JSONLD);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) setPage(detail as PageKey);
    };
    window.addEventListener("navigate", handler);
    return () => window.removeEventListener("navigate", handler);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <Header active={page} onNavigate={setPage} onOpenExam={() => setExamOpen(true)} />
      <PortfolioPages page={page} onOpenExam={() => setExamOpen(true)} />
      <Footer onNavigate={setPage} />
      {examOpen && <ExamArtifactsModal onClose={() => setExamOpen(false)} />}
    </div>
  );
}
